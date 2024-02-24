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
parser.add_argument("--dir", required=True, help="Directory for team members")
args = parser.parse_args()

org = args.org
team = args.team
directory = os.path.join(args.dir, team)
os.makedirs(directory, exist_ok=True)

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
    """---
title: "${name}"
avatar: ${avatarUrl}
repository: ${url}
---
"""
)

for m in members:
    m["name"] = m["name"] or m["login"]
    filename = os.path.join(directory, f"{m['name'].lower().replace(' ', '-')}.md")
    text = member_template.substitute(**m)
    with open(filename, "w") as file:
        file.write(text)
