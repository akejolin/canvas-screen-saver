const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000


let _baseUrl = process.env.BASE_URL || ''
_baseUrl = _baseUrl !== '' ? _baseUrl.replace(/\/$/, '').replace(/^\//, '') : ''
_baseUrl = `/${_baseUrl}`
//app.use(express.static('build'))
app.use(`${_baseUrl}`, express.static('build'))
//app.get('/asteroids/', (req, res) => res.sendFile(path.join(PUBLIC_DIR+'/index.html')))

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
  console.log(`baseUrl: ${_baseUrl}`)
})