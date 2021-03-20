const mongoose = require("mongoose");
//const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://ivanberes:ivanberes@cluster0.anijl.mongodb.net/Banksy?retryWrites=true&w=majority"
);

const reviewSeed=[

  {
    ratingValue:"5",
    comment:"Loved the expereince of working with Buying with Banksy",
    date: new Date(Date.now())
  },
  {
    ratingValue:"5",
    comment:"Great artwork and easy ordering!",
    date:"3/19/2021"
  },
  {
    ratingValue:"4",
    comment:"The shipping of the art work came one day late. But apart from that it was a lovely expereience.",
    date:"3/20/2021"
  }

];
console.log(reviewSeed);