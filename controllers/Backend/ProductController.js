const { Product } = require('../../models');


module.exports = {
    async index(req, res) {
        // Récupération des produits
        const products = await Product.findAll();
        // Renvoie la vue 
        res.render('layouts/app', { content: '../backend/product/index', title: 'Produits', products });
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
    },

    async edit(req, res) {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.redirect('/products');
        }

        res.render('layouts/app', { content: '../backend/product/edit', title: 'Éditer un produit', product });
    },


    async update(req, res) {
        const { id } = req.params;
        const { name, description, category } = req.body;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.redirect('/products');
        }

        await product.update({
            name,
            description,
            category,
        });

        res.redirect('/products');
    },

    async delete(req, res) {
        const { id } = req.params;

        const product = await Product.findByPk(id);

        if (!product) {
            return res.redirect('/products');
        }

        await product.destroy();

        res.redirect('/products');
    }

};


