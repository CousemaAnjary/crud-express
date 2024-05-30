const express = require("express");
const router = express.Router();

// Importation des contrôleurs
const ProductController = require("../controllers/Backend/ProductController");

// Définition des routes
router.get("/", function (req, res) {
  res.send("hello world");
});

router.get('/products', ProductController.index);
router.get('/product/create', ProductController.create);
router.post('/product/store', ProductController.store);

module.exports = router;
