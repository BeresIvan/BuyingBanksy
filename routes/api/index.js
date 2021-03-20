const router = require("express").Router();
const reviewRoutes = require("./reviews");

// reviewroutes
router.use("/reviews", reviewRoutes);

module.exports = router;
