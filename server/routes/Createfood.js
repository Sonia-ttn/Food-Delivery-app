const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const Food = require("../models/food_models");

router.post(
  "/createfood",
  async (req, res) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
    try {
      Food.create({
        categoryName:req.body.categoryName,
        name: req.body.name,
        options: req.body.options,
        img:req.body.img,
        description: req.body.description,
      });
      res
        .status(200)
        .json({  Food: req.body, message: "added data" });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  }
);
router.get("/createfood", async (req, res) => {
  try {
    let data = await Food.find({});
    console.log(data);
    res
      .status(200)
      .json({  Food: data });
  } catch (err) {
    res.status(400).json({ success: false });
  }
});
module.exports=router;