/**
 * @fileoverview Use fixtures from files in Jest tests.
 * Adaptation of markdown-it/markdown-it-testgen's fixtures method.
 * @see https://github.com/markdown-it/markdown-it-testgen/blob/master/index.js
 *
 * @example
 * describe('markdown-it-foo-plugin test', () => {
 *   const md = require('markdown-it')().use(require('../../markdown-it-foo-plugin'))
 *   runFixtures(path.join(__dirname, 'fixtures/foo.txt'), md.render.bind(md))
 * })
 */

const fs = require('fs')
const p = require('path')

const yaml = require('js-yaml')   // eslint-disable-line

function _class(obj) {
  return Object.prototype.toString.call(obj)
}

function isString(obj) {
  return _class(obj) === '[object String]'
}
function isFunction(obj) {
  return _class(obj) === '[object Function]'
}
function isArray(obj) {
  return _class(obj) === '[object Array]'
}

function fixLF(str) {
  return str.length ? `${str}\n` : str
}

function normalize(text) {
  return text.replace(/<blockquote>\n<\/blockquote>/g, '<blockquote></blockquote>')
}

function parse(input, options) {
  const lines = input.split(/\r?\n/g)
  const max = lines.length
  let min = 0
  let line = 0
  let fixture
  let i
  let l
  let currentSep
  let blockStart

  const result = {
    fixtures: [],
  }

  const sep = options.sep || ['.']

  // Try to parse meta
  if (/^-{3,}$/.test(lines[0] || '')) {
    line++
    while (line < max && !/^-{3,}$/.test(lines[line])) {
      line++
    }

    // If meta end found - extract range
    if (line < max) {
      result.meta = lines.slice(1, line).join('\n')
      line++
      min = line
    } else {
      // if no meta closing - reset to start and try to parse data without meta
      line = 1
    }
  }

  // Scan fixtures
  while (line < max) {
    if (sep.indexOf(lines[line]) < 0) {
      line++
      continue
    }

    currentSep = lines[line]

    fixture = {
      type: currentSep,
      header: '',
      first: {
        text: '',
        range: [],
      },
      second: {
        text: '',
        range: [],
      },
    }

    line++
    blockStart = line

    // seek end of first block
    while (line < max && lines[line] !== currentSep) {
      line++
    }
    if (line >= max) {
      break
    }

    fixture.first.text = fixLF(lines.slice(blockStart, line).join('\n'))
    fixture.first.range.push(blockStart, line)
    line++
    blockStart = line

    // seek end of second block
    while (line < max && lines[line] !== currentSep) {
      line++
    }
    if (line >= max) {
      break
    }

    fixture.second.text = fixLF(lines.slice(blockStart, line).join('\n'))
    fixture.second.range.push(blockStart, line)
    line++

    // Look back for header on 2 lines before texture blocks
    i = fixture.first.range[0] - 2
    while (i >= Math.max(min, fixture.first.range[0] - 3)) {
      l = lines[i]
      if (sep.indexOf(l) >= 0) {
        break
      }
      if (l.trim().length) {
        fixture.header = l.trim()
        break
      }
      i--
    }

    result.fixtures.push(fixture)
  }

  return result.meta || result.fixtures.length ? result : null
}

// Read fixtures recursively, and run iterator on parsed content
//
// Options
//
// - sep (String|Array) - allowed fixture separator(s)
//
// Parsed data fields:
//
// - file (String): file name
// - meta (Mixed):  metadata from header, if exists
// - fixtures
//
function load(path, options, iterator) {
  let input
  let parsed
  const stat = fs.statSync(path)

  if (isFunction(options)) {
    iterator = options
    options = { sep: ['.'] }
  } else if (isString(options)) {
    options = { sep: options.split('') }
  } else if (isArray(options)) {
    options = { sep: options }
  }

  if (stat.isFile()) {
    input = fs.readFileSync(path, 'utf8')

    parsed = parse(input, options)

    if (!parsed) {
      return null
    }

    parsed.file = path
    try {
      parsed.meta = yaml.safeLoad(parsed.meta || '')
    } catch (__) {
      parsed.meta = null
    }

    if (iterator) {
      iterator(parsed)
    }
    return parsed
  }

  let result
  let res
  if (stat.isDirectory()) {
    result = []

    fs.readdirSync(path).forEach((name) => {
      res = load(p.join(path, name), options, iterator)
      if (Array.isArray(res)) {
        result = result.concat(res)
      } else if (res) {
        result.push(res)
      }
    })

    return result
  }

  // Silently other entries (symlinks and so on)
  return null
}

/**
 * Use fixtures from files in Jest tests.
 * @param {string} path - Path to fixtures file.
 * @param {function} renderer - Takes string & outputs rendered string.
 * @param {object} options - Set header true to show headers from file.
 */
function runFixtures(path, renderer, options) {
  options = { ...options }

  load(path, options, (data) => {
    data.meta = data.meta || {}

    const desc = data.meta.desc || p.relative(path, data.file)

    describe(desc, () => {
      data.fixtures.forEach((fixture) => {
        it(
          // eslint-disable-next-line
          `line ${fixture.first.range[0] - 1}` + (fixture.header && options.header ? (': ' + fixture.header) : ''),
          () => {
            expect(renderer(fixture.first.text)).toEqual(normalize(fixture.second.text))
          }
        )
      })
    })
  })
}

module.exports = runFixtures
module.exports.load = load
