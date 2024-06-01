const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../../config'); // Importer la clé secrète depuis config.js

module.exports = {
    async create(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../auth/login', title: 'Connexion' });
    },

    async store(req, res) {
        // Récupération des données du formulaire
        const { email, password } = req.body;

        // Vérification des données
        if (!email || !password) {
            return res.redirect('/login');
        }

        // Recherche de l'utilisateur
        const user = await User.findOne({ where: { email } });

        // Vérification de l'utilisateur
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.redirect('/login');
        }

        // Création du token JWT
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

        // Stocker le token dans un cookie ou l'envoyer en réponse
        res.cookie('authToken', token, { httpOnly: true });

        // Redirection vers la liste des produits
        res.redirect('/admin/dashboard');
    },

    async destroy(req, res) {
        // Déconnexion de l'utilisateur
        res.clearCookie('authToken');
        // Redirection vers la page de connexion
        res.redirect('/login');
    }
};
