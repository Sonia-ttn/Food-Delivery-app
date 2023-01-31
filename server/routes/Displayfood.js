const express = require("express");
const router = express.Router();

router.post(
    "/displayfood",async (req, res) => {
      try {
        //console.log(global.food_items)
        res.send([global.food_items,global.food_categories]);
        
      } catch (err) {
        console.log(err.message)
        res.status(400).send("Server Error");
      }
    }
  );
  module.exports=router;