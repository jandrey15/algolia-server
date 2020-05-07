const algoliasearch = require('algoliasearch/lite')
require('dotenv').config()

const client = algoliasearch('ZKVB80BMVH', process.env.API_KEY_ADMIN)
const index = client.initIndex('BlogSearch')

module.exports = index
