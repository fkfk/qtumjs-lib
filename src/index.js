var vipstarcoinjs = require('bitcoinjs-lib')

Object.assign(vipstarcoinjs.networks, require('./networks'))

vipstarcoinjs.utils = require('./utils')

module.exports = vipstarcoinjs
