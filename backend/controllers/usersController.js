let User = require("../models/user.model");
const jwt = require("jsonwebtoken")


const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}

// Login User
const LoginUser = async(req,res)=>{
    const {email , password} = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({message:"Logged In Successfully",token})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// signup user
const SignUpUser =async (req,res)=>{
   const {email , password} = req.body;
   try {
    const user = await User.signup(email, password)
    //create a token
    const token = createToken(user._id)
    res.status(200).json({message:"user created successfully",token,email})
   } catch(error) {
    res.status(400).json({error:error.message})
   }
}

module.exports = {LoginUser, SignUpUser}