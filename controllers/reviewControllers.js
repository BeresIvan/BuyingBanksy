const db = require("../models");

// Defining methods for the ReviewsController
module.exports = {
  create: function(req, res) {
    console.log("INside the function", req.body);
    db.Review
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
