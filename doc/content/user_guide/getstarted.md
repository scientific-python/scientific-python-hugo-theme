---
title: Get Started
---

The **Scientific Python Hugo Theme** is a theme for the [Hugo](https://gohugo.io) static site generator, inspired by the [PyData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/en/latest/).

To use this theme on your site, follow these instructions:

## Dependencies

1. [Install Hugo](https://gohugo.io/installation/). Either the standard or extended editions of Hugo will work.

   Verify that `hugo` is on your `PATH`:

   ```
   $ hugo version
   hugo v0.120.3-a4892a07b41b7b3f1f143140ee4ec0a9a5cf3970 linux/amd64 BuildDate=2023-11-01T17:57:00Z VendorInfo=gohugoio
   ```

2. [Install Dart Sass](https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass).

You can also [install Hugo as a snap](https://gohugo.io/installation/linux/#snap), which includes Dart Sass.

## Set up the theme

This theme is designed to be used as a Git submodule inside your site's source repository.

1. If you haven't already, create a Git repository for your new site:

   ```sh
   mkdir NEW-SITE
   cd NEW-SITE
   git init
   ```

2. Add the theme repository as a submodule:

   ```sh
   git submodule add https://github.com/scientific-python/scientific-python-hugo-theme themes/scientific-python-hugo-theme
   ```

3. Copy the theme's documentation site as a template for your site:

   ```sh
   cp -a themes/scientific-python-hugo-theme/doc/* .
   ```

4. Test the site:

   ```
   $ make serve
   ...
   Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
   ```

   Load that URL in your browser. If you see the theme's documentation page, the site compiled successfully and you can customize it with your own content.

## Develop your site

Proceed to develop your site by adding content and custom resources like CSS or JavaScript.

The web server started with `make serve` will recompile your site every time it changes, and automatically refresh the browser.

### Content

Place Markdown files in `./contents/`. Also see the [Hugo documentation](https://gohugo.io/content-management/organization/).

### `config.yaml`

Your site configuration file is `./config.yaml`. It is used to set the name of the site, configure navigation bars, etc.
Example `config.yaml` files can be seen in [scientific-python.org](https://github.com/scientific-python/scientific-python.org/blob/main/config.yaml), [numpy.org](https://github.com/numpy/numpy.org/blob/main/config.yaml.in), and [scipy.org](https://github.com/scientific-python/scientific-python.org/blob/main/config.yaml).

### CSS

To customize styles, add CSS (`.css`) and Sass (`.scss`) files to the `./assets/css/` directory.
It's recommended to put your customizations in a file named `custom.css`, but other `.css` and `.scss` files added there will also be loaded.

CSS and SCSS files are compiled as Hugo templates, i.e. configuration variables from the `config.yaml` file can be accessed as `{{ .Site.Params.VARIABLE }}`.

### JavaScript

Add custom JavaScript files to the `./static/js/` directory with a `.js` extension. They will automatically be included in the built pages.

## Deploy your site

Build your site for deployment with `make html`. The generated site is in `./public`.

## Next steps

Take a minute to learn about the [features](features) and [shortcodes](shortcodes) provided by the theme.
