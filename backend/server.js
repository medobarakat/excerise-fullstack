require('dotenv').config()
const express = require("express")

// express app
const app = express()

// routes
app.get("/",(req,res)=>{
    res.json({message:"welcome to the app"})
})

// listeners
app.listen(process.env.PORT,()=>{
    console.log(`Server Started At Port ${process.env.PORT}`)
})