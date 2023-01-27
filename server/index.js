
const express=require("express");
const app=express();
require('dotenv').config();
const port=process.env.PORT;
var cors = require('cors')
const mongodb=require("./db");
mongodb();

app.use(cors());
app.use(express.json());
app.use("/api",require("./routes/Createuser"))
app.use("/api",require("./routes/Loginuser"))
app.listen(port,()=>{
    console.log("server running on "+port)
})