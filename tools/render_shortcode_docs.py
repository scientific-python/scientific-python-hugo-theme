import os
import re

shortcodes = [
    os.path.join(dirpath, filename)
    for (dirpath, dirs, files) in os.walk(".")
    for filename in sorted(files)
    if (dirpath.endswith("/shortcodes") and filename.endswith(".html"))
]


def shortcode_doc(fn):
    """
    Return description, example, code
    """
    with open(fn) as f:
        data = f.read()

    match = re.match(
        "^{{/\\*.*doc: ([^\n]*)(.*?)^\\*/}}$", data, re.MULTILINE | re.DOTALL
    )

    if not match:
        return None, None, None

    description, code = match.group(1), match.group(2).strip()

    example = (
        code.replace("{{< ", "{{</* ")
        .replace(" >}}", " */>}}")
        .replace("{{% ", "{{%/* ")
        .replace(" %}}", " */%}}")
    )

    return description, example, code


print(
    """\
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
"""
)

for shortcode_fn in shortcodes:
    title = os.path.basename(shortcode_fn).replace(".html", "")
    description, example, code = shortcode_doc(shortcode_fn)
    if description is None:
        continue
    print(f"## `{title}`")
    print()
    print(description)
    print(f"```\n{example}\n```")
    print("This example renders as:")
    print("___")
    print(code)
    print("___")
