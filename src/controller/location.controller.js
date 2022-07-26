const express=require("express")
const location=require("../locationCord")


const router=express.Router();
console.log(location)


router.get("",async(req,res)=>{
    try {
        res.status(200).send({"location":location})
    } catch (error) {
        console.log(error)
    }
})

router.get("/bharat",async(req,res)=>{
    try {
        res.status(200).send({"messege":"i am working"})
    } catch (error) {
        console.log(error)
    }
})


router.post("",async(req,res)=>{
    try {
        var loc=req.body.cord
        
        location[0]= loc[0]
        location[1]= loc[1]
        res.status(200).send({"location":location})
    } catch (error) {
        console.log(error)
    }
})
module.exports=router;