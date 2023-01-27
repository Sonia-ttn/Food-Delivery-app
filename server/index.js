const express=require("express");
const app=express();
const port=5000;
var cors = require('cors')
const mongodb=require("./db");
mongodb();
app.get("/",(req,res)=>{
    res.send("heyy")
    console.log("hey")
})
app.use(cors());
app.use(express.json());
app.use("/api",require("./routes/Createuser"))
app.use("/api",require("./routes/Loginuser"))
app.listen(port,()=>{
    console.log("server running on "+port)
})