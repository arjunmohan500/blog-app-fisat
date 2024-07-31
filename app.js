const Mongoose=require("mongoose")
const Jwt=require("jsonwebtoken")
const Express=require("express")
const Cors=require("cors")
const Bcrypt=require("bcrypt")


let app=Express()


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3030,()=>{
    console.log("server started")
})