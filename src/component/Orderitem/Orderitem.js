import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './Orderitem.css'

const Orderitem = ({product,handlerRemoveCart}) => {
   const {id,img,name,price,quantity,shipping}=product
    return (
        <div className='order-item-Container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='order-deatails'>
                <div >
                    <p>{name}</p>
                    <p><small>Price:{price}</small></p>
                    <p><small>Shipping:{shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className='dlt-container'>
                     <button onClick={() =>handlerRemoveCart(id)} className='btn-dlt' ><FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
            
        </div>
    );
};

export default Orderitem;