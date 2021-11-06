---
title: Get Started
sidebar: true
---

## The Scientific Python theme for Hugo

The **Scientific Python Hugo Theme** is a theme for the
[Hugo](https://gohugo.io) static site generator built on the
[Fresh](https://github.com/StefMa/hugo-fresh) theme.

To use the theme, you will need to
[download hugo](https://github.com/gohugoio/hugo/releases)
and place it on your path.

## Getting started

1. Download [the theme ZIP file](https://github.com/scientific-python/scientific-python-hugo-theme/archive/refs/heads/main.zip) and extract it.
2. Copy the `doc` folder as a template of your new website:

   ```
   cp -r scientific-python-hugo-theme-main/doc ./my-website
   cd my-website
   ```

3. Initialize git and add `scientific-python-hugo-theme` as a submodule:

   ```
   git init
   git submodule add https://github.com/scientific-python/scientific-python-hugo-theme themes/scientific-python-hugo-theme
   ```

4. Download all submodules:

   ```
   git submodule update --init --recursive
   ```

5. Build your site:

   ```
   hugo serve
   ```

Browse to `http://localhost:1313`, and hopefully you will see your new site!

## Building for production

Run `hugo` and find the output in `public`.

## Customizing the site

Edit `config.yaml` to your liking.

To customize styling, add one or more `*.css` files to the `assets/css` directory.
These files may make use of Hugo templating,
e.g. to access configuration variables as `{{ .Site.Params.somevar }}`.

Add custom JavaScript to `static/js/*.js`.

## Shortcodes

See [shortcodes]({{< relref "shortcodes" >}}).

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

## News

The first post from `/content/en/news` will be highlighted on the
front page.  If you don't want that, remove the `/content/en/news`
folder.

## Example sites

See the
[scientific-python.org](https://github.com/scientific-python/scientific-python.org),
[numpy.org](https://github.com/numpy/numpy.org), and
[scipy.org](https://github.com/scipy/scipy.org) repositories for
examples of what is possible by changing `config.yaml`.
