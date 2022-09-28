import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,10)))
    },[]);

    useEffect(()=>{
        const storedCard=getStoredCart()
        const saveCart=[]
        for (const id in storedCard) {
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCard[id]
                addedProduct.quantity=quantity
                saveCart.push(addedProduct)
            }
           
        }
        setCart(saveCart)

    },[products])



    const handlerAddCart=(selectProduct)=>{
        console.log(selectProduct)
        let newCart=[]
        const exists=cart.find(product=>product.id===selectProduct.id)
        if(!exists){
            selectProduct.quantity=1;
            newCart=[...cart,selectProduct]
        }
        else{
            const rest=cart.filter(product=>product.id!==selectProduct.id);exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]

        }
       
        setCart(newCart)
        addToDb(selectProduct.id)
    }

    
    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                products.map(product=> <Product 
                    key={product.id}
                    product={product}
                    handlerAddCart={handlerAddCart}
                   ></Product>)
               }

            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;