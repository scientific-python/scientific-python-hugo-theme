import os
import sys
import requests
import string
import textwrap
import argparse


team_query = string.Template("""
  query {
    organization(login: "$org") {
      team(slug: "$team") {
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
""")


def api(query):
    request = requests.post(
        'https://api.github.com/graphql',
        json={'query': query},
        headers={'Authorization': f'bearer {token}'}
    )
    if request.status_code == 200:
        return request.json()
    else:
        raise RuntimeError("Request received HTTP {request.status_code}: {query}")


parser = argparse.ArgumentParser(description='Generate team gallery from GitHub')
parser.add_argument('--org', required=True, help='GitHub organization name')
parser.add_argument('--team', required=True, help='Team name in the organization')
parser.add_argument('--title', help='Title for gallery entry (defaults to team name)')
args = parser.parse_args()

org = args.org
team = args.team
title = args.title if args.title else args.team


token = os.environ.get('GH_TOKEN', None)
if token is None:
    print("No token found.  Please export a GH_TOKEN with permissions "
          "to read team members.", file=sys.stderr)
    sys.exit(-1)


resp = api(team_query.substitute(org=org, team=team))
members = resp['data']['organization']['team']['members']['nodes']

print('---')
print(f'title: {title}')
print(f'org: {org}')
print('---')
print(f'{{{{< team org="{org}" name="{title}" >}}}}')
for m in members:
    print('  ' + textwrap.dedent(f'''\
      {{{{< team_member
            login="{m["login"]}"
            name="{m["name"] or m["login"]}"
            url="{m["url"]}"
            avatarUrl="{m["avatarUrl"]}" >}}}}
    '''))
print("{{< /team >}}")
