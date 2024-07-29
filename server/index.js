const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
require('dotenv').config()

connectDB()

const app = express()

app.use(cors())
app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/book/',require('./routes/books'))

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server runing on port ${PORT}`))  