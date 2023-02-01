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
        type:String,
        required:true
    },
    options:{
        type:Array,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
}) 
let models=mongoose.model("Food-items",Foodschema)
module.exports=models