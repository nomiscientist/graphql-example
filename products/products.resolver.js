const  productsModel  = require('./products.model') ;

module.exports = {
    Query: {
        products: () => {
            console.log('Resolving for products...');
            return productsModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max);
        }
    }
}