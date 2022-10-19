import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Orderitem from '../Orderitem/Orderitem';

const Order = () => {
    const {products,priviesCart}=useLoaderData()
    const [cart,setCart]=useState(priviesCart)
    const handlerRemoveCart=(id)=>{
        const remaining=cart.filter(product=>product.id!==id)
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='shop-item-container'>
                {
                    cart.map(product=><Orderitem 
                    key={product.id}
                    product={product}
                    handlerRemoveCart={handlerRemoveCart}
                    ></Orderitem>)
                    
                }
            </div>
            <div className='order-container'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Order;