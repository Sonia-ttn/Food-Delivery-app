const mongoose = require("mongoose");
let uri =
  "mongodb+srv://Sonia:E8GeOiv6ONo5L2Xa@cluster0.bf20kmb.mongodb.net/Gofood?retryWrites=true&w=majority;";
mongoose.set("strictQuery", false);

const mongodb = async () => {
  await mongoose.connect(uri, async (err, res) => {
    if (err) {
      console.log(err);
    } 
    else {
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food-items");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("food-categories");
        foodCategory.find({}).toArray(function(err,catData){
          if (err) {
            console.log(err);
          } else {
              global.food_items=data
              global.food_categories=catData
            //console.log(global.food_categories);
          }
        })
        
      });
    }

  });
};

module.exports = mongodb;
