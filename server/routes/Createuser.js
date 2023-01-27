const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../model");
var bcrypt = require('bcryptjs');
router.post(
  "/createuser",
  //email must be an valid
  body("email").isEmail(),
  //name must be 5characters long
  body("name").isLength({ min: 5 }),
  //password must be 5 characters long 
  //incorrect password is the msg passed when validation fails
  body("password",'Incorrect Password').isLength({ min: 4 }),
  async (req, res) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const salt=await bcrypt.genSalt(10);
      let secPass=await bcrypt.hash(req.body.password,salt);
    try {
      User.create({
        name: req.body.name,
        location: req.body.location,
        email: req.body.email,
        password: secPass,
      });
      res
        .status(200)
        .json({ success: true, User: req.body, message: "added data" });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  }
);
router.get("/createuser", async (req, res) => {
  try {
    let data = await User.find({});
    console.log(data);
    res
      .status(200)
      .json({ success: true, User: data, message: "list of data" });
  } catch (err) {
    res.status(400).json({ success: false });
  }
});
router.put("/createuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    let data = await User.updateOne(req.params, {
      $set: req.body,
    });
    console.log(data);
    res
      .status(200)
      .json({ success: true, User: data, message: "Updated data" });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
});
router.delete("/createuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    let data = await User.deleteOne(req.params);
    console.log("deleted", data);
    res
      .status(200)
      .json({ success: true, User: data, message: "Data deleted" });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
});
module.exports = router;
