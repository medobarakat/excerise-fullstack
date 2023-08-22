let User = require("../models/user.model");

// Login User
const LoginUser =(req,res)=>{
    res.json({message:"Login User"})
}

// signup user
const SignUpUser = (req,res)=>{
    res.json({message:"Sign Up User"})
}

module.exports = {LoginUser, SignUpUser}