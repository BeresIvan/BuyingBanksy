const router = require("express").Router();
const reviewController = require("../../controllers/reviewControllers");

router.route("/")
  .post(reviewController.create);

module.exports = router;
