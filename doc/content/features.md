---
title: Features
---

## Partials

The following partials are meant to be overridden:

- `post_meta.html`: Render meta-data under a post title.
                    We have not yet defined this template, but you can use it to add author information, date, etc.
- `footer_actions`: This appears in the right-hand side of the footer.  E.g., numpy.org uses it for mailing list subscriptions.

## Shortcut list

The depths of the shortcut list on the left of each post can be
controlled by setting the `shortcutDepth` parameter in the post
preamble.  It defaults to 2.

## Page information

Each page should contain a `summary` in the preamble, otherwise the
site description is provided as metadata.

## Code styling

To enable code styling, add the following to your config file:

```yaml
markup:
  highlight:
    noClasses: false
```

The default theme is [Witch Hazel](https://github.com/theacodes/witchhazel),
but with a blue background.
To use a different theme, [generate a new
stylesheet](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode)
using:

```bash
hugo gen chromastyles --style=monokai > /assets/css/code-highlight.css
```

You can replace `monokai` with any of the themes supported by
[Chroma](https://github.com/alecthomas/chroma), as listed in their
[gallery](https://xyproto.github.io/splash/docs/).

Then, use fenced code blocks and remember to specify the language:

````md
```python
def foo(x):
    return x**2
```
````

## News

The first post from `/content/en/news` will be highlighted on the
front page.  If you don't want that, remove the `/content/en/news`
folder.

By default, news items link to the `/news` category page (which lists
all news items).  You can override that by setting `newsLink` in the
preamble of any news post.

### Single page news

If you prefer to list all your news items on one page, you may do so
in `/news.md`, instead of adding posts to `/news`.  Set the
`newsHeader` parameter in the preamble of that document to populate
the banner on the front page.

## Team gallery

The `tools/team_query.py` file gets a list of team members from GitHub.  To
use it, you will need to set the GH_TOKEN environment variable
to a personal access token.

The team is rendered using shortcodes (`team`, `team_member`).

Example usage:

```
python team_query.py --org scientific-python --team spec-steering-committee --title "Spec Steering Committee" > content/en/teams/spec-steering-committee.md
```

we generate a raw HTML gallery, and provide a
shortcode (include-html) for pulling it in anywhere on the site.

## Analytics

The theme supports analytics through Plausible, which can be self-hosted or paid-for at https://plausible.io/.
To enable Plausible analytics, add to your `config.yaml`:

```
params:
  plausible:
    dataDomain: your-domain.org
    javaScript: https://your.plausible.io/javascript/path.js
```

By default, `javaScript` points to the server at
`https://analytics.scientific-python.org`.  Contact the Scientific
Python team to have your analytics hosted there.
