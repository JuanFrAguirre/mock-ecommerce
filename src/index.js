const express = require('express')
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const router = require('./routes/index.routes')
const app = express()
const PORT = 3030 || process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(
  session({
    secret: 'this is a secret!',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 5 * 60000,
    },
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', router)

app.listen(PORT, () => {
  console.log(`\n----------\nServer listening on port ${PORT}\n----------\n`)
})
