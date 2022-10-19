import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import './Login.css'

const Login = () => {
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||'/'
    const handlesignIn=(event)=>{
        event.preventDefault()
        const user=event.target
        const email=user.email.value
        const password=user.password.value
        
        
        login(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
            navigate('/')
            navigate(from,{replace:true})
            
        })
        .catch(error=>{
            console.error(error)
        })

    }

    return (
        <div className='form-container'>
            <h1 className='form-titel'>Login</h1>
            <form onSubmit={handlesignIn}>
                 <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                 </div>
                 <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                 </div>
                 <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-john?<Link to='/signup'>Create New Account</Link> </p>
        </div>
    );
};

export default Login;