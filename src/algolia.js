const algoliasearch = require('algoliasearch/lite')
const { config } = require('./config')

const client = algoliasearch('ZKVB80BMVH', config.apiKeyAdmin)
const index = client.initIndex('instant_search_prod')

module.exports = index
