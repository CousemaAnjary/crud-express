


module.exports = {
    async index(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../backend/product/index', title: 'Produits' });
    },

    async create(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../backend/product/create', title: 'Créer un produit' });
    },
};


