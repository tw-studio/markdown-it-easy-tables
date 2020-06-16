/**
 * Replaces tabs in (multiline) string input with proper number of spaces
 * accounting for tab stop logic.
 * @param {string} input - (Multiline) string input.
 * @param {int} tabsize - Tab stop size in number of spaces. (default: 2)
 */

const replaceTabs = (input, tabsize) => {
  const tabSize = tabsize || 2
  const lines = input.split(/\r?\n/)

  for (let i = 0; i < lines.length; i++) {
    let tabPos
    // eslint-disable-next-line
    while (lines[i].search('\t') !== -1) {
      tabPos = lines[i].search('\t')
      const spacesNum = tabSize - (tabPos % tabSize)
      let spaces = ''
      for (let j = 0; j < spacesNum; j++) {
        spaces += ' '
      }
      lines[i] = lines[i].replace(/\t/, spaces)
    }
  }
  return `${lines.join('\n')}`
}

module.exports = replaceTabs
