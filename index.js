import express from 'express'
import dotenv from 'dotenv'
const app = express();

const PORT = process.env.PORT || 5000;
app.get('/', (req,res) => {
  res.send(`Hello man`)
})
app.get('/todo', (req,res) => {
  res.send(`Hello Myfriend Welcome again`)
})

app.listen(PORT, ()=> {
  console.log(`Server is Running Port ${PORT}`);
})