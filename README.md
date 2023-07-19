# markdown-it-easy-tables

[![build status](https://github.com/tw-studio/markdown-it-easy-tables/workflows/build/badge.svg)](https://github.com/tw-studio/markdown-it-easy-tables)
[![npm version](http://img.shields.io/npm/v/markdown-it-easy-tables.svg?style=flat)](https://www.npmjs.com/package/markdown-it-easy-tables)
[![npm downloads](https://img.shields.io/npm/dm/markdown-it-easy-tables.svg?style=flat)](https://www.npmjs.com/package/markdown-it-easy-tables)
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/tw-studio/markdown-it-easy-tables/blob/master/LICENSE.txt) 

Welcome to **markdown-it-easy-tables**! 🎉

This [markdown-it](https://github.com/markdown-it/markdown-it) plugin makes tables in Markdown both **easy to write** and **easy to read**.

<br />

**Convert Markdown like this...**

    ```table
    Rank    City           Country         Population (millions)   Attractions
    -       -              -------         -:                      ---------------------
    1       Paris          France          2.2                     Eiffel Tower, Louvre Museum
    2       Tokyo          Japan           14.0                    Tokyo Tower, Shibuya Crossing
    3       Rome           Italy           2.9                     Colosseum, Vatican City
    4       Sydney         Australia       5.4                     Sydney Opera House, Bondi Beach
    5       New York City  United States   8.4                     Statue of Liberty, Times Square
    ```

<br />

**... into HTML like this**🪄 

<table>
<thead>
<tr>
<th>Rank</th>
<th>City</th>
<th>Country</th>
<th align="right" style="text-align:right">Population (millions)</th>
<th>Attractions</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Paris</td>
<td>France</td>
<td align="right" style="text-align:right">2.2</td>
<td>Eiffel Tower, Louvre Museum</td>
</tr>
<tr>
<td>2</td>
<td>Tokyo</td>
<td>Japan</td>
<td align="right" style="text-align:right">14.0</td>
<td>Tokyo Tower, Shibuya Crossing</td>
</tr>
<tr>
<td>3</td>
<td>Rome</td>
<td>Italy</td>
<td align="right" style="text-align:right">2.9</td>
<td>Colosseum, Vatican City</td>
</tr>
<tr>
<td>4</td>
<td>Sydney</td>
<td>Australia</td>
<td align="right" style="text-align:right">5.4</td>
<td>Sydney Opera House, Bondi Beach</td>
</tr>
<tr>
<td>5</td>
<td>New York City</td>
<td>United States</td>
<td align="right" style="text-align:right">5.4</td>
<td>Statue of Liberty, Times Square</td>
</tr>
</tbody>
</table>

<br />

## Table of Contents

- [🎁 Features](#-features)
- [💿 Installation](#-installation)
- [📝 Usage Rules](#-usage-rules)
- [🙌 Acknowledgements](#-acknowledgements)
- [👥 Related Projects](#-related-projects)
- [📜 License](#-license)

<br />

## 🎁 Advantages

- **Intuitive.** Write tables easily with a simple and intuitive syntax.
- **Readable.** Create visually appealing and easy-to-read tables.
- **Headers.** Header rows are optional and easy to configure.
- **Align Columns.** Adjust column alignments for neat and organized tables.
- **Supports Inline Markdown.** Support for most inline markdown like **emphasis**, `code`, or [links](#)
- **Works with Markdown Extensions.** Integrate with Markdown extensions in your code editor.

<br />

## 💿 Installation

```sh
$ pnpm add markdown-it-easy-tables
```

Use it as a [markdown-it](https://github.com/markdown-it/markdown-it) plugin in your JavaScript:

```javascript
var md = require('markdown-it')()
            .use(require('markdown-it-easy-tables'))
```

Or use it with many Markdown extensions (many use `markdown-it` under the hood) in your favorite code editor (like VSCode).

<br />

## 📝 Usage Rules

The basics:

1. **Fencing**: Wrap your tables with the `table` fence.
2. **Column Spacing**: Simply use 2+ spaces to separate columns.
3. **Headers**: Underline the first row to mark it as a header.
4. **Inline Markdown**: Feel free to use inline markdown for emphasis, code, and more.

In more detail:

### 1. Fencing

Wrap your tables with the `table` fence. This can be done using either backticks or tildes.

    ```table
    ```

or 

    ~~~table
    ~~~

### 2. Column Spacing

Separate each column with 2+ spaces for easy readability. The first row dictates the column boundaries for the whole table.

    ```table
    Column1    Column2    Column3
    Data1      Data2      Data3
    ```

### 3. Headers

Mark the first row as a header by underlining it in the second row. You can use dashes `-`, colons `:`, or a combination of both to denote alignment. Check out these examples for guidance:

```markdown
Default   Alignment   With   Dashes
-------   ---------   ----   ------

Right   Align   Columns
----:   -:      ---------:

Center  Align   Columns
:----:  :-:     :

Left  Align   Columns
:---  :-      :--------

Minimum   Underline   Length  Is  1
-         -           -       -   -
```

### 4. Inline Markdown

Your tables can still have all the perks of Markdown. Feel free to use inline markdown for your data.

    ```table
    **Bold Text**   *Italic Text*
    `Code Snippet`  [Link Text](#)
    ```

<br />

## 🙌 Acknowledgements

Big shout-out to the following projects that made `markdown-it-easy-tables` possible:
- [markdown-it](https://github.com/markdown-it/markdown-it) — Markdown parser, done right.
- [markdown-it-testgen](https://github.com/markdown-it/markdown-it-testgen)
- [markdown-it-textual-uml](https://github.com/manastalukdar/markdown-it-textual-uml)

<br />

## 👥 Related Projects

You might also want to check out these similar projects:
- [markdown-it-table](https://github.com/torifat/markdown-it-table)
- [markdown-it-multimd-table](https://github.com/RedBug312/markdown-it-multimd-table)

<br />

## 📜 License

This project is [MIT](https://github.com/tw-studio/markdown-it-easy-tables/blob/master/LICENSE.txt) licensed.
