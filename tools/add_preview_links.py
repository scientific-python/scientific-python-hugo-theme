filename = "doc/content/_index.md"
preview_links = """
{{< admonition attention >}}
See scientific python, [blog](blog), learn, [tools](tools), scipy, and numpy.
{{< /admonition >}}
"""

with open(filename, "r") as f:
    index = f.readlines()

with open(filename, "w") as f:
    index.insert(3, preview_links)
    index = "".join(index)
    f.write(index)
