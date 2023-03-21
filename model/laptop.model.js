const mongoose = require("mongoose");

const laptopSchema = mongoose.Schema(
  {
    laptopName:{
        type:String
    },
    laptopModel: {
      type: String,
    },
    amount: {
      type: String,
    },
    image: {
      type: String,
    
    },
    quantity: {
      type: Number,
      default: 0
    },
    },    
  {
    timestamps: true,
  }
);

const laptop = mongoose.model("laptop", laptopSchema);
module.exports = laptop;