import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let totalPrice =0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totalShipping + tax;
    // console.log(cart);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item : {quantity}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;