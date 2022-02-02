---
title: Shortcodes
shortcutDepth: 1
---

<!-- DO NOT EDIT.  This file is generated by `tools/render_shortcode_docs.py`.  -->

Markdown is a convenient and simple format to write in.
However, it doesn't always do everything we want (or do it in a nice way).
Rather than adding raw HTML to our source files, Hugo allows us to use
_shortcodes_.  Shortcodes are small snippets that look like this
```
{{</* _shortcodename parameters_ */>}}
```
that Hugo renders using a predefined template.

Here are some shortcodes used by this theme.

## `include-md`

Render and include a markdown file.
```
{{</* include-md "example-markdown.md" */>}}
```
This example renders as:
___
{{< include-md "example-markdown.md" >}}
___
## `youtube`

Embed YouTube videos, with foldable captions. The levelOffset parameter can be used to control the depth of the video heading and content.
```
{{</* youtube id="EmGSSbwdCZQ" class="talk" title="Open Data Science" venue="CU Denver Data Science Symposium 2020" author="Stefan van der Walt" levelOffset=3 */>}}

Here, I will give a transcript of the whole video, and say some things about it that you cannot know otherwise without watching the **video**.

### But what is it?

This is it!

{{</* /youtube */>}}
```
This example renders as:
___
{{< youtube id="EmGSSbwdCZQ" class="talk" title="Open Data Science" venue="CU Denver Data Science Symposium 2020" author="Stefan van der Walt" levelOffset=3 >}}

Here, I will give a transcript of the whole video, and say some things about it that you cannot know otherwise without watching the **video**.

### But what is it?

This is it!

{{< /youtube >}}
___
## `yamlToTable`

Render YAML to HTML.
```
{{</* yamlToTable */>}}
headers:
  - Project
  - Available Packages
  - Download location

format:
  - align: left
  - align: left
  - align: right

rows:
  - columns:
      - "NumPy"
      - |
        Official *source code* (all platforms) and *binaries* for<br/>
        **Windows**, **Linux**, and **Mac OS X**
      - "[PyPi page for NumPy](https://pypi.python.org/pypi/numpy)"

  - columns:
      - SciPy
      - |
        Official *source code* (all platforms) and *binaries* for<br/>
        **Windows**, **Linux** and **Mac OS X**
      - |
        [SciPy release page](https://github.com/scipy/scipy/releases) (sources)<br/>
        [PyPI page for SciPy](https://pypi.python.org/pypi/scipy) (all)

{{</* /yamlToTable */>}}
```
This example renders as:
___
{{< yamlToTable >}}
headers:
  - Project
  - Available Packages
  - Download location

format:
  - align: left
  - align: left
  - align: right

rows:
  - columns:
      - "NumPy"
      - |
        Official *source code* (all platforms) and *binaries* for<br/>
        **Windows**, **Linux**, and **Mac OS X**
      - "[PyPi page for NumPy](https://pypi.python.org/pypi/numpy)"

  - columns:
      - SciPy
      - |
        Official *source code* (all platforms) and *binaries* for<br/>
        **Windows**, **Linux** and **Mac OS X**
      - |
        [SciPy release page](https://github.com/scipy/scipy/releases) (sources)<br/>
        [PyPI page for SciPy](https://pypi.python.org/pypi/scipy) (all)

{{< /yamlToTable >}}
___
## `include-html`

Include an HTML file. The filename is specified relative to the root path.
```
{{</* include-html "static/example.html" */>}}
```
This example renders as:
___
{{< include-html "static/example.html" >}}
___