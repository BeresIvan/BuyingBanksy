const mongoose = require("mongoose");

const allReviews = new mongoose.Schema({
  rating: {
    type: Number,
    min:1,
    max:5,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  reviewTitle: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  reviewIMG: {
    type: String,
    require:false,
  },
});

module.exports = mongoose.model("mytable", allReviews);
