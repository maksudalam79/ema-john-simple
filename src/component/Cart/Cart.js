import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order list</h3>
                <h2>Selected Items:{cart.length}</h2>
        </div>
    );
};

export default Cart;