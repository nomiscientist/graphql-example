const  ordersModel  = require('./orders.model') ;

module.exports = {
    Query: {
        orders: () => {
            console.log('Resolving for orders...');
            return ordersModel.getAllOrders();
        }
    }
}