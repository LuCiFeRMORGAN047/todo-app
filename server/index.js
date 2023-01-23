const express = require("express")
const User = require('./User')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/todo", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, e =>{
   if(e){
      console.log(e.message)
   }else {
      console.log("connected")
   }
} 
);

app.post('/register',async(req,res)=>{
   const  {email , password } = req.body 
   try {
      const user = await User.create({
         email : email , 
         password : password ,
         todo : [] 
        })
     
        await user.save()
        res.sendStatus(200)
   }catch(e){
      res.send("error")
   }
 

})
app.patch('/addone',async (req,res)=>{
   const  newone = req.body.titre 
   const email = req.body.email
   try{
      
    const infos =new User(await User.findOne({"email" : email})) 
      infos.todo = [...infos.todo, {"name" : newone , isDone : false }]
      await User.create(infos)
      res.send(newone)
     }catch(e){
      res.send(e.message)
     }
})

app.patch('/delete',async(req,res)=>{
   const email = req.body.email
   const remove = req.body.titre
   try{
      const user = new User(await User.findOne({"email" : email}))
      const todos = user.todo 
      for (var i in todos) {
         if (todos[i].name == remove) {
            todos[i].isDone = !todos[i].isDone;
            break;
         }
       }
       await User.updateOne({"email" : email },{"todo" : todos})
       res.sendStatus(200)
     }catch(e){
      res.send(e.message)
     }
})
app.post('/login' , async(req,res)=>{
  const email = req.body.email
  const password = req.body.password
   try{
      const user = new User(await User.findOne({"email" : email , "password" : password })) 
      
         res.send(user)
     
       
     }catch(e){
      res.send(e.message)
     }
})
app.listen(5000 , ()=> console.log("server started at port 5000"))