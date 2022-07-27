const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = buildSchema(`
    type Query{
        products: [Product]
        orders: [Order]

    }

    type Product {
        id: ID!
        description: String
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
    products : [
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
    ],

    orders : [
        {
            date: '2005-12-12',
            subtotal: 22.22,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        description: 'Red Shoes',
                        price: 12.12,
                        reviews: [
                            {
                                rating: 5,
                                comment: 'Excellent'
                            }
                        ]
                    },
                    quantity: 2
                },
                {
                    product: {
                        id: 'blackshoe',
                        description: 'Black Shoes',
                        price: 24.12,
                        reviews: [
                            {
                                rating: 4,
                                comment: 'Excellent'
                            }
                        ]
                    },
                    quantity: 4
                }
            ]
        }
    ]
};

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, ()=>{
    console.info('Listening on GraphQL server...');
});