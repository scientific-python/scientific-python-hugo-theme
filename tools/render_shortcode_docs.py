import os
import re

shortcodes = [
    os.path.join(dirpath, filename)
    for (dirpath, dirs, files) in os.walk(".")
    for filename in files
    if (dirpath.endswith("/shortcodes") and filename.endswith(".html"))
]


def shortcode_doc(fn):
    with open(fn, 'r') as f:
        data = f.read()

    match = re.match('^{{/\*.*doc: ([^\n]*)(.*)^\*/}}$', data, re.MULTILINE | re.DOTALL)

    if not match:
        return None, None, None

    description, code = match.group(1), match.group(2).strip()

    example = (code
               .replace('{{< ', '{{</* ')
               .replace(' >}}', ' */>}}')
               .replace('{{% ', '{{%/* ')
               .replace(' %}}', ' */%}}'))

    return description, example, code


print('''\
---
title: Shortcodes
sidebar: true
---
''')

for shortcode_fn in shortcodes:
    title = os.path.basename(shortcode_fn).replace('.html', '')
    description, example, code = shortcode_doc(shortcode_fn)
    if description is None:
        continue
    print(f"### `{title}`")
    print()
    print(description)
    print(f"```\n{example}\n```")
    print("This example renders as:")
    print('___')
    print(code)
    print('___')
