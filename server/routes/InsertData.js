const express = require("express")
const FoodModel = require("../models/Food")

const route = express.Router()

// acess data from client and insert data to database

route.post("/fooditems",async (req, res) => {
    const {foodName , days} = req.body
    console.log(foodName);
    const food = new FoodModel({foodName: foodName, daysScienceAtes: days})

    try{
        await food.save()
        res.send("Inserted Data")
    }catch(err) {
        console.log(err)
    }
})

module.exports = route