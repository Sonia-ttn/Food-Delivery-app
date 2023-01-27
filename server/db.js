const mongoose=require("mongoose");
let uri="mongodb+srv://Sonia:E8GeOiv6ONo5L2Xa@cluster0.bf20kmb.mongodb.net/Gofood?retryWrites=true&w=majority;"

const mongodb=()=>{
    mongoose.set('strictQuery',false)
    mongoose.connect(uri)
.then(()=>{
    console.log("db connected")
})
.catch((error)=>{
    console.log("error",error)
})
}
module.exports=mongodb;