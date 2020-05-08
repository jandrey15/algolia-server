require('dotenv').config()

const config = {
  apiKeyAdmin: process.env.API_KEY_ADMIN,
  apiUrl: process.env.API_URL,
  apieKeyContent: process.env.API_KEY_CONTENT,
}

module.exports = { config: config }
