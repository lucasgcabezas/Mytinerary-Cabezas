require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const passport = require('passport')
// Hay que importar todo capo
require('dotenv').config()
require('./config/database')
require('./config/passport')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(4000, ()=> console.log("App listening on port 4000"))

