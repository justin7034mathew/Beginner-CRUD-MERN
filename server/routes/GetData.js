const express = require("express")
const FoodModel = require("../models/Food")

const route = express.Router()

//acess data from database and send data to client

route.get("/inserted",async (req, res) => {
    const result = await FoodModel.find({})
    res.send(result)
    console.log(result);
})

module.exports = route