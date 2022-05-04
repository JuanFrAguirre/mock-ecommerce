const express = require('express')
const path = require('path')
const router = require('./routes/index.routes')
const app = express()
const PORT = 3030 || process.env.PORT

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', router)
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`\n----------\nServer listening on port ${PORT}\n----------\n`)
})
