const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
<<<<<<< HEAD

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
=======
>>>>>>> e8fd9e367a95f996f51d019d644c8259cb592e6f

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
