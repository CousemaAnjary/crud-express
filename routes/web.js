const express = require("express");
const router = express.Router();
const { auth, guest } = require('../middlewares/auth');

// Importation des contrôleurs
const ProductController = require("../controllers/Backend/ProductController");
const RegisterUserController = require("../controllers/Auth/RegisterUserController");
const AuthenticatedSessionController = require("../controllers/Auth/AuthenticatedSessionController");
const DashboardController = require("../controllers/Backend/DashboardController");


// Définition des routes
router.get("/", function (req, res) {
  res.send("hello world");
});

router.get("/register", guest, RegisterUserController.create);
router.post("/register", guest, RegisterUserController.store);

router.get("/login", guest, AuthenticatedSessionController.create);
router.post("/login", guest, AuthenticatedSessionController.store);
router.get("/admin/logout", auth, AuthenticatedSessionController.destroy);


router.get("/admin/dashboard", auth, DashboardController.index);


// Routes pour les produits
router.get('/admin/products', auth, ProductController.index);
router.get('/admin/product/create', auth, ProductController.create);
router.post('/admin/product/store', auth, ProductController.store);
router.get('/admin/product/edit/:id', auth, ProductController.edit);
router.post('/admin/product/update/:id', auth, ProductController.update);
router.post('/admin/product/delete/:id', auth, ProductController.delete);

module.exports = router;
