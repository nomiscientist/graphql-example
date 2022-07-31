const prodData = [
        {
            id: 'redshoe',
            description: 'Red Shoes',
            price: 12.12,
            reviews: []
        },
        {
            id: 'blackshoe',
            description: 'Black Shoes',
            price: 24.12,
            reviews: []
        }
    ];

function getAllProducts() {
    return prodData;
}

function getProductsByPrice(min, max) {
    return prodData.filter((product)=>{
        return product.price >= min && product.price <= max;
    });
}

function getProductsByID(id) {
    return prodData.find((product)=> {
        return product.id === id;
    });
}

function addNewProduct(id, description, price) {
    
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    };
    prodData.push(newProduct);
    return newProduct;
}

function addProductReview(id, rating, comment) {
    const matchedProduct = getProductsByID(id);
    if(matchedProduct){
        const newReview = {
            rating,
            comment
        };
        matchedProduct.reviews.push(newReview);
        return newReview;
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsByID,
    addNewProduct,
    addProductReview
}