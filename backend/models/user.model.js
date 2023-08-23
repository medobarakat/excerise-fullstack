const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
//for sign up
userSchema.statics.signup = async function (email, password) {
  // validation

  if(!email || !password) {
    throw Error("All Fields Must Be Filled")
  }

  if(!validator.isEmail(email)){
    throw Error("Email must be a valid email")
  }

  // if(!validator.isStrongPassword(password)){
  //   throw Error("Password must be a valid password")
  // }



  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("Email already in use");
  }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await this.create({
      email,
    password: hash,
  });
  
  return user;

};

// for sign in

userSchema.statics.login = async function (email, password) {
  // validation

  if(!email || !password) {
    throw Error("All Fields Must Be Filled")
  }

  if(!validator.isEmail(email)){
    throw Error("Email must be a valid email")
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email Is Not Found");
  }
  const match = await bcrypt.compare(password,user.password)
  if(!match) {
    throw Error("Incorrect Password")
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
