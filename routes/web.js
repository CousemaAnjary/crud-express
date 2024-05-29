const express = require("express");
const router = express.Router();

// Définition des routes
router.get("/", function (req, res) {
  res.send("hello world");
});

module.exports = router;
