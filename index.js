import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT 

app.get("/todo", (req, res) => {
  res.send("Hello Ayubdheere!");
});

app.get("/", (req, res) => {
  res.send("You have new message");
});

const people =  [
  {id:1, name: 'ayub'},

]
console.log(people[1])

app.listen(PORT, () => {
  console.log(`Server is Runing port ${PORT}`);
});
