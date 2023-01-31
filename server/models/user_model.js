const mongoose=require("mongoose");
let Userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    location:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 
let model=mongoose.model("User",Userschema)
module.exports=model