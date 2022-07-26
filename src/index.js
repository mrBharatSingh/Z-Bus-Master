const express=require("express")
const app=express()

// const cors=require("cors")
app.use(express.json());
app.use(cors())
console.log("index.js")

const locationController=require("./controller/location.controller")
app.use("/",locationController)
module.exports = app;