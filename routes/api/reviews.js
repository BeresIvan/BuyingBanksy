const router = require("express").Router();
const reviewController = require("../../controllers/reviewController");

router.route("/")
  .post(reviewController.create);

module.exports = router;
