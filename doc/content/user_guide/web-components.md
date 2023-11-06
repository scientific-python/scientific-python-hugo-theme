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

`primary`{.interpreted-text role="bdg-primary"}
`secondary`{.interpreted-text role="bdg-secondary"}
`success`{.interpreted-text role="bdg-success"}
`primary outline`{.interpreted-text role="bdg-primary-line"}
`secondary outline`{.interpreted-text role="bdg-secondary-line"}
`success outline`{.interpreted-text role="bdg-success-line"}

Here are some of the available button-style links, also using semantic
colors:

::: grid
auto

::: grid-item
::: {.button-ref ref-type="ref" color="info" shadow=""}
badges-buttons

Info
:::
:::

::: grid-item
::: {.button-ref ref-type="ref" color="success" shadow=""}
badges-buttons

Success
:::
:::

::: grid-item
::: {.button-ref ref-type="ref" color="warning" shadow=""}
badges-buttons

Warning
:::
:::

::: grid-item
::: {.button-ref ref-type="ref" color="danger" shadow=""}
badges-buttons

Danger
:::
:::

::: grid-item
::: {.button-ref ref-type="ref" color="muted" shadow=""}
badges-buttons

Muted
:::
:::

::: grid-item
::: {.button-ref ref-type="ref" color="light" shadow=""}
badges-buttons

Light
:::
:::

::: grid-item
::: {.button-ref ref-type="ref" color="dark" shadow=""}
badges-buttons

Dark
:::
:::
:::

::: note
::: title
Note
:::

[Sphinx Design
buttons](https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html)
are actually links, meaning they are rendered in HTML with `<a>` tags
instead of `<button>`. Use them if you need a link to look like a
button, however, be aware that they do not follow accessibility best
practices for native button components such as using the correct [ARIA
attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role).
:::

If in your site\'s [custom CSS file](custom-css) you override the [CSS
custom properties](css-variables) `--pst-color-*` (where `*` is one of
the semantic color names, such as `primary`, `danger`), badges and
buttons will automatically use the custom color.

## Cards

::: grid
::: grid-item-card
Only heading
:::

::: grid-item-card
Only body.

But with multiple text paragraphs.
:::

::: grid-item-card
Heading and body

Content of the third card.

`Sample badge`{.interpreted-text role="bdg-primary"}
:::
:::

::: grid
::: grid-item-card
A card with a dropdown menu

::: dropdown
`eye me-1`{.interpreted-text role="fa"} Click to expand dropdown

Hidden content
:::
:::

::: {.grid-item-card link="https://example.com"}
A clickable card
:::
:::

::: grid
::: grid-item-card

### panel 1 header

panel 1 content more content ++++++++++++++ panel 1 footer
:::

::: grid-item-card

### panel 2 header

panel 2 content ++++++++++++++ panel 2 footer
:::
:::

## Tabs

Code example from the PyData Sphinx Theme's kitchen sink:

{{< tabs >}}

{{< tab "c++" >}}

```c++
int main(const int argc, const char **argv) {
    return 0;
}
```

{{< /tab >}}

{{< tab "python" >}}

```python
def main():
    return
```

{{< /tab >}}

{{< tab "java" >}}

```java
class Main {
    public static void main(String[] args) {
    }
}
```

{{< /tab >}}

{{< tab "julia" >}}

```julia
function main()
end
```

{{< /tab >}}

{{< tab "fortran" >}}

```fortran
PROGRAM main
END PROGRAM main
```

{{< /tab >}}

{{< /tabs >}}

An example with headings

{{< tabs >}}

{{< tab "First example" >}}

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

{{< /tab >}}

{{< tab "Second example" >}}
Another hello world
{{< /tab >}}

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

::: dropdown
And with no title and some content!
:::

::: dropdown
With a title

And some content!
:::

::: {.dropdown icon="unlock"}
With a title and icon

And some content and an icon!
:::

::: {.dropdown color="primary" icon="unlock"}
A primary color dropdown

And some content!
:::

::: {.dropdown color="secondary" icon="unlock"}
A secondary color dropdown

And some content!
:::

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
