import React from 'react';


const Cart = (props) => {

    const cart = props.cart;
     
    // const totalPrice = cart.reduce((total,prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
         total = total + product.price * product.quantity;
     }
    let shipping = 0;
    if (total > 400) {
        shipping = 12.99
    } else if (total > 200) {
        shipping = 4.99
    } else if(total > 100) {
        shipping = 2.99;
    }else{
        shipping = 0;
    }

    const tax = total * 0.05;
    const grandTotal = total + shipping + tax;

    const formatNumber = num =>{
        return Number(num).toFixed(2);
    }

    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Item Ordered :{props.cart.length}</h4>
            <p>Product Price :{total}</p>
            <p><small>Shipping cost :{shipping}</small></p>
            <p><small>Tax + VAT : {formatNumber(tax)} </small></p>
            <p>Total Price : {formatNumber(grandTotal)}</p>
            {
                props.children
            }
           
        </div>
    );
};
export default Cart;