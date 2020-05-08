const addRecords = require('../src')

exports.handler = function (event, context, callback) {
  console.log('ok se disparo')
  addRecords()
}
