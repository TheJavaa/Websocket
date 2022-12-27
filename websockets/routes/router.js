const { Router } = require('express');
const router = Router();

let products = [];

router.get('/', (req, res) => res.render('form', { products }));

module.exports = {
	router,
	products
};
