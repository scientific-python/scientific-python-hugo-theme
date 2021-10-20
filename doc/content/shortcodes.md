---
title: Shortcodes
sidebar: true
---

## Tables

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

## Youtube videos

```
{{</* youtube id="lLrCRiH-fQo" class="talk" title="Developing Scientific Open Source Software" venue="IE 2021" author="Stefan van der Walt" *//>}}

{{< youtube id="lLrCRiH-fQo" class="talk" title="Developing Scientific Open Source Software" venue="IE 2021" author="Stefan van der Walt" />}}


{{</* youtube id="EmGSSbwdCZQ" class="talk" title="Open Data Science" venue="CU Denver Data Science Symposium 2020" author="Stefan van der Walt" */>}}

Here, I will give a transcript of the whole video, and say some things about it that you cannot know otherwise without watching the **video**.

### But what is it?

This is it!

{{</* /youtube */>}}
```


{{< youtube id="EmGSSbwdCZQ" class="talk" title="Open Data Science" venue="CU Denver Data Science Symposium 2020" author="Stefan van der Walt" >}}

Here, I will give a transcript of the whole video, and say some things about it that you cannot know otherwise without watching the **video**.

### But what is it?

This is it!

{{< /youtube >}}
