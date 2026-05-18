const express = require("express");
const app=express();

app.use(express.json());

let users=[{id:1,name:"sam",email:"sam@gmial.com"},
{id:2,name:"ken",email:"ken@gmial.com"},{id:3,name:"tom",email:"tomm@gmial.com"},
];

app.get("/", (req,res)=> res.send(users));
app.get("/user/:id", (req,res)=>{
const {id} = req.params;
return res.json(users.find((user)=> user.id==id));
});

app.post("/",( req, res)=> {
  const {name, email}= req.body;
  const id =users.length+1;
  const user={id,name,email};
  users.push(user);
  return res.status(201).json(user);
})

app.delete("/user/:id", (req,res)=>{
const {id} = req.params;
const user=users.find((user)=> user.id==id);
if(!user)
  return res.status(404).send();

users=users.filter((user)=> user.id !=id);
return res.status(204).send(); 
});

app.patch("/user/:id", (req,res)=>{
const {id} = req.params;
const user=users.find((user)=> user.id==id);
if(!user)
  return res.status(404).send();
const {name, email}= req.body;
if(name)
  user.name=name;
if(email)
  user.email=email;
const index=users.findIndex((user)=> user.id==id);
users[index]=user;
return res.json(user); 
});



app.listen(3000,"0.0.0.0",()=>{
  console.log("Server is running on port 3000");
  
});