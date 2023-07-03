/**
 * @description This function is used to calculate the total price of all the products of a new order
 * @param {Array} products cartProduct: this is an array of objects 
 * @returns {Number} total: this is the total price of all the products in the cart
 */
export const totalPrice = (products) => {
    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    return total;
}