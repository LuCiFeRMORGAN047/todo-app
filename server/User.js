const mongoose = require ("mongoose")

const todoShcema = new mongoose.Schema({
    name : String ,
    isDone : Boolean ,
})
const UserShcema = new mongoose.Schema({
    email : String ,
    password : String,
    todo : [todoShcema] ,
   
    

})
module.exports = mongoose.model("users",UserShcema)