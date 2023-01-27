const mongoose=require("mongoose");
let schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:7
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
        maxLength:6
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 
let model=mongoose.model("User",schema)
module.exports=model