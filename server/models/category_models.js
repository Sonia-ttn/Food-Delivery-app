const mongoose=require("mongoose");
let Categoryschema= new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    }
})
let models=mongoose.model("Food-category",Categoryschema)
module.exports=models
