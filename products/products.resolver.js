const  productsModel  = require('./products.model') ;

module.exports = {
    Query: {
        products: () => {
            console.log('Resolving for products...');
            return productsModel.getAllProducts();
        }
    }
}