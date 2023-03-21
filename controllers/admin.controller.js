const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const laptop = require("../model/laptop.model");
const User = require("../model/user.model");
 
 
  // registered users
exports.allusers = async (req, res) => {
  
  try {
    const allusers = await User.findOne();
      return res.status(200).json({
        message: "All users",
        allusers
      })
                        
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};


    // getUserById
exports.getUserbyemail = async (req, res) => {
  const {email} = req.params;
  try {

    const getUser = await User.findOne({ email });

    if (!getUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(201).json({
      message: "User Found",
      getUser
    })
  } catch (error) {
          return res.status(500).json({
            error: error.message,
          });
  }
}
    
exports.addlaptop = async (req, res) => {
  try {
    const { laptopName, laptopModel, amount, quantity, image} = req.body

    const laptopExist = await laptop.find({ laptopName, laptopModel});
  
    if (laptopExist){
     await laptop.findOneAndUpdate(
      {
        laptopName
      },
      {
        $inc: {quantity}
      },
      {
        new: true,
      }
      )
    }
  
    const newlaptop = await laptop.create({
      laptopName,
      laptopModel,
      amount,
      quantity,
      image
    })
    return res.status(200).json({
      message: `New ${laptopName} with model ${laptopModel} added`,
      newlaptop
    })
    
  } catch (error) {
    return res.status(500).json({
      message:error.message
    })
  }
}