const express = require("express")
const FoodModel = require("../models/Food")

const route = express.Router()


//Grabing the id from client and delete the item that have same id

route.delete("/delete/:id", async(req, res) => {
    const id = req.params.id
    await FoodModel.findByIdAndDelete(id).exec()
    
})


module.exports = route