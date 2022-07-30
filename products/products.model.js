const prodData = [
        {
            id: 'redshoe',
            description: 'Red Shoes',
            price: 12.12,
            reviews: [
                {
                    rating: 4,
                    comment: 'very good'
                }
            ]
        },
        {
            id: 'blackshoe',
            description: 'Black Shoes',
            price: 24.12,
            reviews: [
                {
                    rating: 5,
                    comment: 'Excellent'
                }
            ]
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
    
}

module.exports = {
    getAllProducts,
    getProductsByPrice
}