import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';


const OrderReview = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1>Review page{user?.email}</h1>
        </div>
    );
};

export default OrderReview;