const db = require("../models");

// Defining methods for the ReviewsController
module.exports = {

  findAll: function(req, res) {
    console.log("find function", req.query);
    db.Review
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("INside the function", req.body);
    db.Review
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
