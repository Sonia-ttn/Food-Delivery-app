const express=require("express");
const app=express();
const port=5000;
const mongodb=require("./db");
mongodb();
app.get("/",(req,res)=>{
    res.send("heyy")
    console.log("hey")
})
app.use(express.json());
app.use("/api",require("./routes/Createuser"))
app.listen(port,()=>{
    console.log("server running on "+port)
})