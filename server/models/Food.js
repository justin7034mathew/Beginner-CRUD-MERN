const mongoose = require("mongoose")

const FoodSchema = ({
    foodName :{
        type: String,
        require: true
    },
    daysScienceAtes: {
        type: Number,
        require:true
    }
})

const Food = mongoose.model("food",FoodSchema)

module.exports = Food