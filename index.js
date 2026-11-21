import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/todo", (req, res) => {
  res.send("Hello Ayubdheere!");
});

app.get("/", (req, res) => {
  res.send("You have new message");
});

const people =  [
  {id:1, name: 'ayub'},
  {id:2, name: 'mohamed', tell: '9999494'},
  {id:3, name: 'zamzam', tell: '994322'}
]
console.log(people)

app.listen(4000, () => {
  console.log("Server is Runing 4000");
});
