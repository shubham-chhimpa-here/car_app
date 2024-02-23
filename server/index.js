const express = require('express');
const { connection } = require('./db');
const { userRouter } = require('./routers/user.router');
const app = express()
require('dotenv').config()

const PORT = process.env.PORT;

app.use(express.json())


app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send({msg: 'home page'})
})

app.listen(PORT, async () => {
    console.log(`server is running on port ${PORT}`)
    try {
        connection 
        console.log('connected to db')
    } catch (error) {
        console.log('something went wrong')
    }
})