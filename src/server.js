const app=require("./index")
// const env=require("dotenv")

console.log("server")

const start=async()=>{


    app.listen(process.env.PORT||2233,()=>{console.log("Yort Server is running on http://localhost:2233/")})
   
}

start()