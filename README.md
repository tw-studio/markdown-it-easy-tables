# markdown-it-easy-tables

[![build status](https://github.com/tw-space/markdown-it-easy-tables/workflows/build/badge.svg)](https://github.com/tw-space/markdown-it-easy-tables)
[![npm version](http://img.shields.io/npm/v/markdown-it-easy-tables.svg?style=flat)](https://www.npmjs.com/package/markdown-it-easy-tables)
[![npm downloads](https://img.shields.io/npm/dm/markdown-it-easy-tables.svg?style=flat)](https://www.npmjs.com/package/markdown-it-easy-tables)
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/tw-space/markdown-it-easy-tables/blob/master/LICENSE.txt) 

Markdown tables with indents. Fast and easy to read and write.

Render this...

    ```table
    #   $       Name
    -   -:      -------
    1   $1.39   Lemonade
    2   $2.49   *Watermelon* juice
    ```

Into this...

<table>
<thead>
<tr>
<th>#</th>
<th align="right" style="text-align:right">$</th>
<th>Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td align="right" style="text-align:right">$1.39</td>
<td>Lemonade</td>
</tr>
<tr>
<td>2</td>
<td align="right" style="text-align:right">$2.49</td>
<td><em>Watermelon</em> juice</td>
<tr>
</tbody>
</table>

### Contents

-   [Install](#install)
-   [Usage Rules (with Examples)](#usage-rules-with-examples)
-   [Acknowledgements](#acknowledgements)
-   [Related](#related)
-   [License](#license)

## Install

    $ yarn add markdown-it-easy-tables

Use as a [markdown-it](https://github.com/markdown-it/markdown-it) plugin:

```javascript
var md = require('markdown-it')()
            .use(require('markdown-it-easy-tables'))
```

## Usage Rules (with Examples)

1.  Surround tables in a table fence
2.  Separate columns with 2+ spaces
3.  Underline the first row to mark as a header
4.  Use inline markdown

### 1. Surround tables in a table fence

    ```table
    ```
or

    ~~~table
    ~~~

### 2. Separate columns with 2+ spaces

Separate each column with **2+ spaces** in the **first row**.

    ```table
    here    are   four    columns
    one     two   three   four
    ```

<table><tbody><tr>
<td>here</td><td>are</td><td>four</td><td>columns</td>
</tr><tr>
<td>one</td><td>two</td><td>three</td><td>four</td>
</tr></tbody></table>

    ```table
    this is only        two columns
    the second starts   here
    ```

<table><tbody><tr>
<td>this is only</td><td>two columns</td>
</tr><tr>
<td>the second starts</td><td>here</td>
</tr></tbody></table>

    ```table
    this is also         two columns
    indents   in   later rows   don't   matter
    ```

<table><tbody><tr>
<td>this is also</td><td>two columns</td>
</tr><tr>
<td>indents   in   later</td><td>rows   don't   matter</td>
</tr></tbody></table>

### 3. Underline the first row to mark as a header

Underline the first row with dashes `'-'` and colons `':'` in the **second row** to designate the first a header. 

For a header underline row to be valid:
-   Only use `'-'`, `':'`, and `' '` characters
-   Start every column with `'-'` or `':'`
-   Start & end **default-align** column underlines with `'-'`
-   Start **right-align** underlines with `'-'` and end with `':'`
-   Start & end **center-align** underlines with `':'`
-   Start (explicit) **left-align** underlines with `':'` and end with `'-'`
-   Only the **first** and **last character** in each column's underline are examined for alignment
-   Minimum length for an underline is **one character**

Examples of valid header rows:

    Default   Alignment   With   Dashes
    -------   ---------   ----   ------

    Minimum   Underline   Length  Is  1
    -         -           -       -   -

    Right   Align   Columns
    ----:   -:      ---------:

    Center  Align   Columns
    :----:  :-:     :

    Left  Align   Columns
    :---  :-      :--------

### 4. Use inline markdown

Most inline markdown is supported.

    ```table
    **strong**   *emphasis*
    `code`       [link](#)
    ```

<table>
<tbody>
<tr>
<td><strong>strong</strong></td>
<td><em>emphasis</em></td>
</tr>
<tr>
<td><code>code</code></td>
<td><a href="#">link</a></td>
</tr>
</tbody>
</table>

## Acknowledgements

[markdown-it](https://github.com/markdown-it/markdown-it) — Markdown parser, done right.  
[markdown-it-testgen](https://github.com/markdown-it/markdown-it-testgen)  
[markdown-it-textual-uml](https://github.com/manastalukdar/markdown-it-textual-uml)  

## Related

[markdown-it-table](https://github.com/torifat/markdown-it-table)  
[markdown-it-multimd-table](https://github.com/RedBug312/markdown-it-multimd-table)  

## License

[MIT](https://github.com/tw-space/markdown-it-easy-tables/blob/master/LICENSE.txt)  
