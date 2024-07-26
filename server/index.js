const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/book',require('./routes/books'))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server runing on port ${PORT}`))  