const getCatalog = (request, response) => {
    const catalogServices = require('../services/productServices');
    catalogServices.searchService(function(err, rows) {
        response.render('catalog', { products: rows });
    });

};
const getProductByID = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.reference;
    catalogServices.searchIDService(reference, function(err, rows) {
        response.json(rows);
        response.end();
    });
};
const getProductsByCategory = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.category;
    catalogServices.searchCategoryService(category, function(err, rows) {
        response.json(rows);
        response.end();
    });
};
module.exports = {
    getCatalog,
    getProductByID,
    getProductsByCategory
};