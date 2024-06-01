const jwt = require('jsonwebtoken');
const secretKey = '123456789'; // Utilisez une clé secrète plus sécurisée en production

function addAuthState(req, res, next) {
    const token = req.cookies.authToken; // Lire le cookie authToken
    if (token) {
        try {
            const decoded = jwt.verify(token, secretKey);
            res.locals.isLoggedIn = true;
            res.locals.userId = decoded.userId;
        } catch (err) {
            res.locals.isLoggedIn = false;
        }
    } else {
        res.locals.isLoggedIn = false;
    }
    next();
}

module.exports = addAuthState;
