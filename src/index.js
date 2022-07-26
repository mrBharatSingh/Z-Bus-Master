const express=require("express")
const cors=require("cors")
const app=express()

app.use(cors())
app.use(express.json());

console.log("index.js")

const locationController=require("./controller/location.controller")
app.use("/",locationController)
module.exports = app;