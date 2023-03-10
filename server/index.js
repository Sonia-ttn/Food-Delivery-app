
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
app.use("/api",require("./routes/Createfood"))
app.use("/api",require("./routes/Createcategory"))
app.use("/api",require("./routes/Displayfood"))
app.use("/api",require("./routes/Orderdata"))
app.use("/api",require("./routes/myOrderData"))



app.listen(port,()=>{
    console.log("server running on "+port)
})