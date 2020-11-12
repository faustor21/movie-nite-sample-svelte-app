const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
const port = 3000
const OMDB_URL = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`

app.use(cors())

app.get('', async (req, res) => {
  const queries = req.url.replace('/?', '')

  const response = await fetch(`${OMDB_URL}${queries}`)
  const data = await response.json()

  res.json(data)
})

app.listen(port, () => {
  console.log(`🚀 Server running on port: ${port}`)
})
