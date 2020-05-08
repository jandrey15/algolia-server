const algoliasearch = require('algoliasearch/lite')
const { config } = require('./config')

const client = algoliasearch('ZKVB80BMVH', config.apiKeyAdmin)
const index = client.initIndex('BlogSearch')

module.exports = index
