const { User } = require('../../models');


module.exports = {
    async create(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../auth/register', title: 'Inscription' });
    },

    async store(req, res) {
        // Récupération des données du formulaire
        const { name, email, password } = req.body;

        // Validation des données
        if (!name || !email || !password) {
            return res.redirect('/register');
        }

        // Création de l'utilisateur
        await User.create({
            name,
            email,
            password,
        });

        // Redirection vers la liste des produits
        res.redirect('/login');
    },
};