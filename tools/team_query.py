import os
import sys
import argparse
import string

import requests


team_query = string.Template(
    """
  query {
    organization(login: "$org") {
      team(slug: "$team") {
        name,
        members(first: 100, orderBy: {field: LOGIN, direction: ASC}) {
          nodes {
            login
            name
            url
            avatarUrl
          }
        }
      }
    }
  }
"""
)


def api(query):
    request = requests.post(
        "https://api.github.com/graphql",
        json={"query": query},
        headers={"Authorization": f"bearer {token}"},
    )
    if request.status_code == 200:
        return request.json()
    else:
        raise RuntimeError(f"Request received HTTP {request.status_code}: {query}")


parser = argparse.ArgumentParser(description="Generate team gallery from GitHub")
parser.add_argument("--org", required=True, help="GitHub organization name")
parser.add_argument("--team", required=True, help="Team name in the organization")
args = parser.parse_args()

org = args.org
team = args.team

token = os.environ.get("GH_TOKEN", None)
if token is None:
    print(
        "No token found.  Please export a GH_TOKEN with permissions "
        "to read team members.",
        file=sys.stderr,
    )
    sys.exit(-1)


resp = api(team_query.substitute(org=org, team=team))
members = resp["data"]["organization"]["team"]["members"]["nodes"]
team_name = resp["data"]["organization"]["team"]["name"]

member_template = string.Template(
    """\
[[item]]
type = 'card'
classcard = 'text-center'
body = '''
{{< image
    src="${avatarUrl}"
    alt="Avatar of ${name}" >}}
${name}'''
link = '${url}'
"""
)

members_list = []
for m in members:
    m["name"] = m["name"] or m["login"]
    members_list.append(member_template.substitute(**m))

print("\n".join(members_list).rstrip())
