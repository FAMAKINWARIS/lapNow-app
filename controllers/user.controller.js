const bcrypt = require("bcrypt"); // bcryptjs 
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const createJWT = require("../utils/jwt");

exports.userSignup = async (req, res) => {
  const { phonenumber,firstname, lastname, email, password } = req.body;
  try {
    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({
            message: 'User already exists',
        });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phonenumber,
    });
    // save user to database
    const savedUser = await newUser.save();
    res.status(201).json({
        message: 'User created successfully',
        user: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
};


exports.login = async (req, res) => {
  const {email, password,} = req.body;
  try {
    const userExistinDb = await User.findOne({ email });
    if (!userExistinDb) {
        return res.status(404).json({
            message: 'User does not exist',
        });
    }
    // compare password
    const isMatch = await bcrypt.compare(password, userExistinDb.password);
    if (!isMatch) {
        return res.status(400).json({
            message: 'Invalid credentials',
        });
    }


    // create token
    const accessToken = await createJWT({
        id: userExistinDb._id,
        email: userExistinDb.email,
        firstname: userExistinDb.firstname,
        role: userExistinDb.role,
    });
    
    // set cookie
    res.cookie('jwt', accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(200).json({
        message: 'User logged in successfully',
        accessToken,
    });
} catch (error) {
  return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
}
};


exports.viewLaptops = async(req, res) => {
  try {
      const availableLaptops = await laptop.find();
      return res.status(200).json({
          message: "Laptops available",
        availableLaptops
      })
  } catch (error) {
  return res.status(500).json({
    message: "error",
    error: error.message
  });
  }
};