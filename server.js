// Les modules nécessaires
const express = require("express");
const path = require("path");;
const webRoutes = require("./routes/web");

const app = express();

// Définir le moteur de vue
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// // Middleware pour analyser les requêtes entrantes en JSON et URL-encodées
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Définir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Définir les routes
app.use("/", webRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

