// const fetch = require('node-fetch')
require('es6-promise').polyfill()
require('isomorphic-fetch')
const index = require('./algolia')
const { config } = require('./config')

const fetchData = async () => {
  const API_URL = config.apiUrl
  const API_KEY_CONTENT = config.apieKeyContent
  const FILTER =
    '&include=authors,tags&fields=id,title,url,slug,published_at,custom_excerpt,meta_title,meta_description,feature_image,primary_author,excerpt'

  try {
    const req = await fetch(
      `${API_URL}/posts/?key=${API_KEY_CONTENT}&limit=1${FILTER}`
    )
    const { posts: post } = await req.json()
    // console.log(post)
    return post
  } catch (error) {
    console.error('Algo salio mal :( -> ', error)
  }
}

const addRecords = async () => {
  try {
    const data = await fetchData()
    data[0].objectID = data[0].id
    // console.log('This is data -> ', data)

    // index
    //   .saveObjects(data)
    //   .then(({ objectIDs }) => {
    //     console.log(objectIDs)
    //   })
    //   .catch((err) => console.log('Algo salio mal', err))

    const { objectIDs } = await index.saveObjects(data)
    console.log('This is objectids -> ', objectIDs)
  } catch (error) {
    console.error('Algo salio mal en add records -> ', error)
  }
}

// addRecords()

module.exports = addRecords
