import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.get('/todo', (req,res) => {
    res.send('Hello Ayubdheere!')
})

app.listen(4000,() => {
    console.log('Server is Runing 4000');
})