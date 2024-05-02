---
title: Theme variables and CSS
---

This section covers a few ways that you can control the look and feel of your
theme via your own CSS and theme variables.

## Custom CSS stylesheets

Custom styles should be added to `/assets/css/my_css.css` (where
`my_css` can be any name, other than those already in the theme).

## CSS theme variables

### Color variables

We mostly rely on PyData Sphinx Theme's
[color variables](https://pydata-sphinx-theme.readthedocs.io/en/stable/user_guide/styling.html#color-variables).

However, we ...

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

```
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
