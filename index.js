const express = require("express")
const cors = require("cors")
const mogoose = require("mongoose")


const insertData = require("./server/routes/InsertData")
const getData = require("./server/routes/GetData")
const updateData = require("./server/routes/UpdateData")
const deleteeData = require("./server/routes/DeleteData")
const app = express()

app.use(express.json())
app.use(cors())
app.use(insertData)
app.use(getData)
app.use(updateData)
app.use(deleteeData)

//connecting database

mogoose.connect(
    "mongodb+srv://justin123:justin123@crud.jbnwqaz.mongodb.net/food?retryWrites=true&w=majority&appName=CRUD",{
})



const PORT = process.env.PORT || 3001

app.listen(PORT, console.log("server is running",PORT))