const router = require("express").Router();
const reviewController = require("../../controllers/reviewControllers");

router.route("/")
  .get(reviewController.findAll)
  .post(reviewController.create);


module.exports = router;
