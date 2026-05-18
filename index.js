const express = require("express");

const app = express();

 function index(req,res) {
  return res.send("Hi World !!!"); 
}
app.get("/",index);
app.get("/users/:id",(req,res)=> {
  const {id} = req.params;
  console.log(id);
  
});

app.listen(3000,'0.0.0.0',()=>{
  console.log("Server is running on port 3000");
})