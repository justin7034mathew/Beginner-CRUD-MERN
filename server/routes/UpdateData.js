const express = require("express")
const FoodModel = require("../models/Food")

const route = express.Router()

//update the current data and insert newdata to database

route.put("/update",async (req, res) => {
    const {updateName, id} = req.body
    console.log(id,"id");
    console.log(updateName,"id");

    FoodModel.findByIdAndUpdate(id, { foodName: updateName })
    .then(() => console.log("Updated"))
    .catch((err) => console.log(err.message))
 
})


module.exports = route