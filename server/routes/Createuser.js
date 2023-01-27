const express=require("express");
const router=express.Router()
const User=require("../model")

router.post("/createuser",async(req,res)=>{
    try{
        User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password           
        })
        res.status(200).json({success:true,User:req.body,message:"added data"})
    }
    catch(err){
        res.status(400).json({success:false})
    }
})
router.get("/createuser",async(req,res)=>{
    try{
        let data=await User.find({})
        console.log(data)
        res.status(200).json({success:true,User:data,message:"list of data"})
    }
    catch(err){
        res.status(400).json({success:false})
    }
})
router.put("/createuser/:id",async(req,res)=>{
    try{
        console.log(req.params);
        let data=await User.updateOne(req.params,
            {
                $set:req.body
            })
        console.log(data)
        res.status(200).json({success:true,User:data,message:"Updated data"})
    }
    catch(err){
        res.status(400).json({success:false,error:err})
    }
})
router.delete("/createuser/:id",async(req,res)=>{
    try{
        console.log(req.params);
        let data=await User.deleteOne(req.params)
        console.log("deleted",data)
        res.status(200).json({success:true,User:data,message:"Data deleted"})
    }
    catch(err){
        res.status(400).json({success:false,error:err})
    }
})
module.exports=router;