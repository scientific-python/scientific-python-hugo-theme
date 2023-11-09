---
title: Get Started
---

The **Scientific Python Hugo Theme** is a theme for the [Hugo](https://gohugo.io) static site generator, inspired by the [PyData Sphinx Theme](https://pydata-sphinx-theme.readthedocs.io/en/latest/).

To use this theme on your site, follow these instructions.

## Install Hugo

To use this theme, you will need Hugo.  Hugo is a static site generator, i.e. it takes Markdown source files and transforms them into a website.

1. Install Hugo according to [its installation instructions](https://gohugo.io/installation/).  The standard edition of Hugo is sufficient; you may install the extended edition, but it is not required by this theme.

2. Verify that the `hugo` binary is present in your `PATH` environment variable by running the command `hugo version`, which should output a message like:

   ```
   hugo v0.120.3-a4892a07b41b7b3f1f143140ee4ec0a9a5cf3970 linux/amd64 BuildDate=2023-11-01T17:57:00Z VendorInfo=gohugoio
   ```

## Install theme

This theme is designed to be used as a Git submodule inside the repository that contains the Web site's source files, which Hugo builds from.

1. Create a Git repository for your new site:

   ```sh
   mkdir NEW-SITE && cd NEW-SITE && git init
   ```

2. Add the theme repository as a submodule:

   ```sh
   git submodule add https://github.com/scientific-python/scientific-python-hugo-theme themes/scientific-python-hugo-theme
   ```

3. Copy the theme's documentation site as a template for your site:

   ```sh
   cp -a themes/scientific-python-hugo-theme/doc/* .
   ```

4. Test the site by running `make serve`.  The command's output should include a line like:

   ```
   Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
   ```

   Load that URL in your browser and you should see the the theme's documentation page, indicating that installation is successful.

## Develop your site

Now you may proceed to develop your site by adding content and custom resources like CSS or JavaScript.

As you work, a live preview of your site is available via `make serve`.

### Customization

#### `config.yaml`

The main configuration file is `config.yaml`, in the repository's root directory.  It is used to set the name of the site, configure navigation bars, etc.

For examples of what's possible by editing this file, see these repositories which also use this theme: [scientific-python.org](https://github.com/scientific-python/scientific-python.org/blob/main/config.yaml), [numpy.org](https://github.com/numpy/numpy.org/blob/main/config.yaml.in), and [scipy.org](https://github.com/scientific-python/scientific-python.org/blob/main/config.yaml).

#### CSS

To customize styles, add CSS files to the `assets/css/` directory.  It's recommended to put your customizations in a `custom.css` file, but you may add additional ones as well.

These files may use Hugo templates.  For example, configuration variables from the `config.yaml` file may be accessed like `{{ .Site.Params.VARIABLE }}`.

#### JavaScript

Add custom JavaScript files to the `static/js/` directory with a `.js` extension.  They will automatically be included in the built pages.

## Build your site

To build your site for deployment, run `make html`.  The generated files will be placed in the `public/` directory.

## Next steps

To learn about the features provided by this theme, see [features]({{< relref "features" >}}) and [shortcodes]({{< relref "shortcodes" >}}).
