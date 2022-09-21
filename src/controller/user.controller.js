const express=require("express")
const userData=require("../users")


const router=express.Router();


router.get("",async(req,res)=>{
    try {
        res.status(200).send({"Users":userData})
    } catch (error) {
        console.log(error)
    }
})



router.post("",async(req,res)=>{
    try {
        var user=req.body
        var flag=false;
        console.log(user)
        if(userData[user.phone] && userData[user.phone].password == user.password)
        {
          console.log("password mathch")
          res.status(200).send({"result":"password is match"})
        }
        else{
            console.log("user not found")
            res.status(201).send({"result":"user not found"})
        }
       
    } catch (error) {
        console.log(error)
    }
})
module.exports=router;