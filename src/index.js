const algoliasearch = require('algoliasearch/lite')
require('dotenv').config()

const client = algoliasearch('ZKVB80BMVH', process.env.API_KEY_ADMIN)
const index = client.initIndex('your_index_name')

const objects = [
  {
    objectID: 'myID1',
    firstname: 'Jimmie',
    lastname: 'Barninger',
  },
  {
    objectID: 'myID2',
    firstname: 'Warren',
    lastname: 'Speach',
  },
]

index.saveObjects(objects).then(({ objectIDs }) => {
  console.log(objectIDs)
})
