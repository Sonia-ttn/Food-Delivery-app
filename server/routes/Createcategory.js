const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const Cat = require("../models/category_models");

router.post(
  "/createcategory",
  async (req, res) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
    try {
      Cat.create({
        categoryName:req.body.categoryName
      });
      res
        .status(200)
        .json({  Cat: req.body, message: "added data" });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  }
);
router.get("/createcategory", async (req, res) => {
  try {
    let data = await Cat.find({});
    console.log(data);
    res
      .status(200)
      .json({ Cat: data });
  } catch (err) {
    res.status(400).json({ success: false });
  }
});
module.exports=router;