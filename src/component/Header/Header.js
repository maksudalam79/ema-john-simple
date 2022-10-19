import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    
   
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/Order">Order</Link>
                <Link to="/OrderReview">Order Review</Link>
                <Link to="/ManageInventory">Manage Inventory</Link>
                
                {
                    user?.uid?
                    <button className='btn-logout' onClick={logOut}>Log out</button>
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                    </>
                }
               

            </div>
            
        </nav>
    );
};

export default Header;