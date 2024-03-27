---
title: Tables
---

## Markdown Tables

The theme supports [GFM table markdown](https://github.github.com/gfm/#tables-extension-).

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

Markdown tables can be aligned:

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

## Table shortcode

This is a feature preview and is not ready for adoption:

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
    Official _source code_ (all platforms) and _binaries_ for<br/>
    **Windows**, **Linux**, and **Mac OS X**
  - "[PyPi page for NumPy](https://pypi.python.org/pypi/numpy)"

- columns:
  - SciPy
  - |
    Official _source code_ (all platforms) and _binaries_ for<br/>
    **Windows**, **Linux** and **Mac OS X**
  - |
    [SciPy release page](https://github.com/scipy/scipy/releases) (sources)<br/>
    [PyPI page for SciPy](https://pypi.python.org/pypi/scipy) (all)

{{< /yamlToTable >}}
