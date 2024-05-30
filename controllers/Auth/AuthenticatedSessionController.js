const { User } = require('../../models');
const bcrypt = require('bcrypt');

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

        // Création de la session
        req.session.userId = user.id; // Stocker l'ID utilisateur dans la session
        req.session.isLoggedIn = true; // Marquer l'utilisateur comme connecté

        // Redirection vers la liste des produits
        res.redirect('/admin/dashboard');
    },

    async destroy(req, res) {
        // Déconnexion de l'utilisateur
        req.session.destroy();

        // Redirection vers la page de connexion
        res.redirect('/login');
    }
};