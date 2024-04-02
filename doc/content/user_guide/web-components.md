---
title: Web Design Components
---

The PyData Sphinx Theme uses
[sphinx-design](https://sphinx-design.readthedocs.io/en/latest/index.html)
to add several UI components and provide extra flexibility for content
creation. These include badges, buttons, cards, and tabs, among other
components. This theme provides custom CSS to ensure that
[sphinx-design](https://sphinx-design.readthedocs.io/en/latest/index.html)
elements look and feel consistent with this theme.

{{< admonition seealso >}}
For more information about how to use these extensions, see [the
sphinx-design
documentation](https://sphinx-design.readthedocs.io/en/latest/index.html).
{{< /admonition >}}

Below you can find some examples of the components created with the
`sphinx-design` extension.

## Badges and button-links {#badges-buttons}

Here are some of the available badges:

{{< badge primary >}}
primary
{{< /badge >}}

{{< badge secondary >}}
secondary
{{< /badge >}}

{{< badge success >}}
success
{{< /badge >}}

{{< badge primary outline >}}
primary outline
{{< /badge >}}

{{< badge secondary outline >}}
secondary outline
{{< /badge >}}

{{< badge success outline >}}
success outline
{{< /badge >}}

Here are some of the available button-style links, also using semantic
colors:

{{< button info >}}
label: Info
link: http://example.com/
{{< /button >}}

{{< button success >}}
label: Success
link: http://example.com/
{{< /button >}}

{{< button warning >}}
label: Warning
link: http://example.com/
{{< /button >}}

{{< button danger >}}
label: Danger
link: http://example.com/
{{< /button >}}

{{< button muted >}}
label: Muted
link: http://example.com/
{{< /button >}}

{{< button light >}}
label: Light
link: http://example.com/
{{< /button >}}

{{< button dark >}}
label: Dark
link: http://example.com/
{{< /button >}}

{{< admonition note >}}
[Sphinx Design
buttons](https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html)
are actually links, meaning they are rendered in HTML with `<a>` tags
instead of `<button>`. Use them if you need a link to look like a
button, however, be aware that they do not follow accessibility best
practices for native button components such as using the correct [ARIA
attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role).
{{< /admonition >}}

If in your site\'s [custom CSS file](custom-css) you override the [CSS
custom properties](css-variables) `--pst-color-*` (where `*` is one of
the semantic color names, such as `primary`, `danger`), badges and
buttons will automatically use the custom color.

## Cards

{{< grid >}}

{{< card >}}
title = 'Only title'
{{< /card >}}

{{< card >}}
body = '''
Only body.

But with multiple text paragraphs.
'''
{{< /card >}}

{{< card >}}
title = 'Heading and body'
body = '''
Content of the third card.

{{< badge primary >}}Sample badge{{< /badge >}}
'''
{{< /card >}}

{{< /grid >}}

{{< grid >}}

{{< card >}}
title = 'A card with a dropdown menu'
body = '''
{{< dropdown >}}
title = 'Click to expand dropdown'
icon = 'fa-solid fa-eye'
body = 'Hidden content'
{{< /dropdown >}}
'''
{{< /card >}}

{{< card >}}
title = 'A clickable card'
link = 'https://example.com'
{{< /card >}}

{{< /grid >}}

{{< grid >}}

{{< card >}}
header = 'Header'
title = 'Card Title'
body = 'Card content'
footer = 'Footer'
{{< /card >}}

{{< card >}}
header = 'Header'
title = 'Card Title'
body = 'Card content'
footer = 'Footer'
{{< /card >}}

{{< /grid >}}

## Tabs

Code example from the PyData Sphinx Theme's kitchen sink:

{{< tabs >}}

[[tab]]
name = 'c++'
content = '''

```c++
int main(const int argc, const char **argv) {
    return 0;
}
```

'''

[[tab]]
name = 'python'
content = '''

```python
def main():
    return
```

'''

[[tab]]
name = 'java'
content = '''

```java
class Main {
    public static void main(String[] args) {
    }
}
```

'''

[[tab]]
name = 'julia'
content = '''

```julia
function main()
end
```

'''

[[tab]]
name ='fortran'
content = '''

```fortran
PROGRAM main
END PROGRAM main
```

'''

{{< /tabs >}}

An example with headings

{{< tabs >}}

[[tab]]
name = 'First example'
content = '''

### How would this work?

Hello _world_

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

```python
def foo(x):
    return x + 1
```

#### What now?

Well, this is a good question.
'''

[[tab]]
name = 'Second example'
content = '''
Another hello world
'''

{{< /tabs >}}

## Dropdowns

Dropdowns look similar to admonitions, but they are clickable
interactive elements that can be used to hide content. See [the Sphinx
Design Dropdown
documentation](https://sphinx-design.readthedocs.io/en/latest/dropdowns.html)
for more information.

::: admonition
An admonition for reference.

And some admonition content.
:::

{{< dropdown >}}
body = 'And with no title and some content!'
{{< /dropdown >}}

{{< dropdown >}}
title = 'With a title'
body = 'And some content!'
{{< /dropdown >}}

{{< dropdown >}}
title = 'With a title and icon'
icon = 'fa-solid fa-lock-open'
body = 'And some content and an icon!'
{{< /dropdown >}}

{{< dropdown >}}
title = 'A primary color dropdown'
icon = 'fa-solid fa-lock-open'
color = 'primary'
body = 'And some content and an icon!'
{{< /dropdown >}}

{{< dropdown >}}
title = 'A secondary color dropdown'
icon = 'fa-solid fa-eye'
color = 'secondary'
body = 'And some content and an icon!'
{{< /dropdown >}}

## Copybuttons

[sphinx-copybutton](https://sphinx-copybutton.readthedocs.io/en/latest/)
adds a copy button to each of your code cells. You can see it in action
by hovering over the code cell below:

```python
print("A copybutton in the top-right!")
```

## Toggle buttons

[sphinx-togglebutton](https://sphinx-togglebutton.readthedocs.io/en/latest/)
allows you to convert admonitions into toggle-able elements.

::: {.admonition .dropdown}
Click me to toggle!

This will be hidden until a click!
:::

::: toggle
A standalone toggle button!
:::
