const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt=require("jsonwebtoken");
const bcrypt=require('bcryptjs')
const User = require("../models/user_model");
require('dotenv').config();
const secret=process.env.SECRET;
router.post("/loginuser",
//email must be an valid
body("email").isEmail(),
body("password",'Incorrect Password').isLength({ min: 4 }),

async(req, res) => {
    let email=req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      try {
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({ errors: "try logging in with correct credentials" });
        }
        const pwdCompare=await bcrypt.compare(req.body.password,user.password);
        if(!pwdCompare){
            return res.status(400).json({ errors:"try logging in with correct credentials" });
        }
        const data={
            user:{
                id:user.id
            }
        }
        const token=jwt.sign(data,secret);
        return res
      .status(200)
      .json({ success: true, message: "logged in" ,token:{token}});
  
        } 
      catch (err) {
        return res.status(400).json({ success: false });
      }
    }
  );
  module.exports = router;
