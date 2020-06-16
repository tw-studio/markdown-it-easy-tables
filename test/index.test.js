const path = require('path')
const runFixtures = require('./utils/run-fixtures-jest.js')
const replaceTabs = require('../utils/replace-tabs.js')

describe('tables with basic headers', () => {
  const md = require('markdown-it')().use(require('..'))

  runFixtures(
    path.join(__dirname, 'fixtures/basic-tables.txt'),
    md.render.bind(md),
    { header: true } // eslint-disable-line
  )
})

describe('tables with alignment headers', () => {
  const md = require('markdown-it')().use(require('..'))

  runFixtures(
    path.join(__dirname, 'fixtures/alignment-tables.txt'),
    md.render.bind(md),
    { header: true }   // eslint-disable-line
  )
})

describe('tabs test', () => {
  runFixtures(
    path.join(__dirname, 'fixtures/tabs.txt'),
    replaceTabs,
    { header: true } // eslint-disable-line
  )
})

describe('full commonmark test', () => {
  const md = require('markdown-it')({
    html: true,
    xhtmlOut: true,
  }).use(require('..'))

  runFixtures(path.join(__dirname, 'fixtures/commonmark-full.txt'), md.render.bind(md))
})
