let User = require("../models/user.model");

// Login User
const LoginUser =(req,res)=>{
    res.json({message:"Login User"})
}

// signup user
const SignUpUser =async (req,res)=>{
   const {email , password} = req.body;
   try {
    const user = await User.signup(email, password)
    res.status(200).json({message:"user created successfully",email,user})
   } catch(error) {
    res.status(400).json({error:error.message})
   }
}

module.exports = {LoginUser, SignUpUser}