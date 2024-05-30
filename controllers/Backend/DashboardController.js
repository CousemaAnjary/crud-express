
module.exports = {
    async index(req, res) {
        // Renvoie la vue 
        res.render('layouts/app', { content: '../backend/dashboard', title: 'Dashboard' });
    },
};