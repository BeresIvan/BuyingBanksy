const express = require("express");
const router = express.Router();
router.use("/app", require("./routes"));

module.exports = router;