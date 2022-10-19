import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   
    let total=0;
    let shipping=0
    let quantity=0
   for(const product of cart){
        quantity=quantity + product.quantity
        total=total + product.price * product.quantity;
        shipping=shipping + product.shipping
    }
    const tax =(total * 0.1).toFixed(2)
    const Grand=total+shipping+parseFloat(tax)

    return (
        <div className='cart'>
            <h3>Order list</h3>
            <h2>Selected Items:{quantity}</h2>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${Grand.toFixed(2)}</h5>
           
        </div>
    );
};

export default Cart;