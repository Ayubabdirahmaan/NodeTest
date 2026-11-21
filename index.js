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
  {id:2, name: 'mohamed'},
]
console.log(people)

app.listen(4000, () => {
  console.log("Server is Runing 4000");
});
