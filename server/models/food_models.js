const mongoose=require("mongoose");
let Foodschema= new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        data: Buffer,
        contentType: String
    },
    options:{
        type:Array,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}) 
let models=mongoose.model("Food-items",Foodschema)
module.exports=models