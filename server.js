// Les modules nécessaires
const express = require("express");
const app = express();

// Définition des routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Lancement du serveur
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
