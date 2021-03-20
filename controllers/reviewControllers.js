const db = require("../models");

// Defining methods for the ReviewsController
module.exports = {
  FindAll: function (req, res) {
    db.Review
      .find(req.query)
      .sort({dat:-1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Review
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
