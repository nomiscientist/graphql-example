const  productsModel  = require('./products.model') ;

module.exports = {
    Query: {
        products: () => {
            console.log('Resolving for products...');
            return productsModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max);
        },
        productsByID : (_, args) => {
            return productsModel.getProductsByID(args.id);
        }
    },
    Mutation: {
        addNewProduct : (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        },
        addProductReview : (_, args) => {
            return productsModel.addProductReview(args.id, args.rating, args.comment);
        }
    }
}