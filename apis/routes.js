const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController.js')
const catalogServices = require('../services/productServices');
//define a router and create routes
const router = express.Router();
//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalog', productController.getCatalog);
router.get('/api/article/:id', productController.getProductByID);

//routes for dynamic processing of clients //-----------------------------------------------
//route for registration
router.post('/api/register', clientController.registerControl); 
//route for login
router.post('/api/login', clientController.loginControl);
router.get('/api/catalog', productController.getCatalog);
//router.get('/api/article/:id', productController.getProductByID);
router.get('/api/clientDetails', productController.getCatalog);
router.get('/api/article/:id', (req, res) => {
    console.log(req.params.id)
    catalogServices.searchIDService(req.params.id, function(err, rows) {
        res.render('article', { product: rows });

    });
});
//export router
module.exports = router;