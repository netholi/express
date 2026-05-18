const express = require("express");

const app = express();

app.get("/",(req,res)=> {res.send('Hello World+++!!!')});
app.get("/users",(req,res)=> {res.send('users')});
app.get("/users/:id",(req,res)=> {res.send('users any')});
app.get("/users/:id/create",(req,res)=> {res.send('users any create form')});

app.listen(3000,'0.0.0.0',()=>{
  console.log("Server is running on port 3000");
})