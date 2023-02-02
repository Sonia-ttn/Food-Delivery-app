const mongoose=require("mongoose");
let OrderSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    order_data:{
        type:Array,
        required:true,
        
    }
}) 
let model=mongoose.model("Order",OrderSchema)
module.exports=model