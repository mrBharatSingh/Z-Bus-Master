const app=require("./index")
const env=require("dotenv")

console.log("server")

const start=async()=>{


    app.listen(process.env.PORT||2233,()=>{console.log("listing on port 2233")})
   
}

start()