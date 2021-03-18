const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: String, required: false },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const review = mongoose.model("review", reviewSchema);

module.exports = review;