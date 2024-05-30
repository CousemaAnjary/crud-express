const { Product } = require('../../models');


module.exports = {
    async index(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../backend/product/index', title: 'Produits' });
    },

    async create(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../backend/product/create', title: 'Créer un produit' });
    },

    async store(req, res) {
        // Récupération des données du formulaire
        const { name, description, category } = req.body;

        // Validation des données
        if (!name || !description || !category) {
            return res.redirect('/product/create');
        }

        // Création du produit
        await Product.create({
            name,
            description,
            category,
        });

        // Redirection vers la liste des produits
        res.redirect('/products');
    }

};


