const express = require("express");
const router = express.Router();
const Order=require("../models/order_models")

router.post(("/orderData"),async(req,res)=>{
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("Email",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("Email",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (err) {
            console.log(err.message)
            res.send("Server Error").json({message:err.message})

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (err) {
            console.log(err.message)
            res.send("Server Error").json({message:err.message})

        }
    }
})
module.exports=router;