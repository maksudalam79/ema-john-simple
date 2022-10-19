import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const Privaterouter = ({children}) => {
    const {user,lodding}=useContext(AuthContext)
    const location=useLocation()

    if(lodding){
        return <div>Lodding</div>
    }

    if(user&& user.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  
};

export default Privaterouter;