const orderData = [
    {
        date: '2005-12-12',
        subtotal: 22.22,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Red Shoes',
                    price: 12.12,
                    // reviews: [
                    //     {
                    //         rating: 5,
                    //         comment: 'Excellent'
                    //     }
                    // ]
                },
                quantity: 2
            },
            {
                product: {
                    id: 'blackshoe',
                    description: 'Black Shoes',
                    price: 24.12,
                    // reviews: [
                    //     {
                    //         rating: 4,
                    //         comment: 'Excellent'
                    //     }
                    // ]
                },
                quantity: 4
            }
        ]
    }
];

function getAllOrders() {
    return orderData
}

module.exports = {
    getAllOrders
}