import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContext';
import './Signup.css'

const Signup = () => {
    const [error,setError]=useState(null)
    const {createuser}=useContext(AuthContext)
    const handlerSubmit=(event)=>{
        
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        const confirm=form.confirm.value
        if(password.length<6){
            setError('Enter password must be 6 digit')
            return
        }
        if(password!==confirm){
             setError("Password does not match")
             return
        }
        
        createuser(email,password)
        .then(result=>{
            const user=result.user
            console.log(user)
        })
        .catch(error=>{
            console.error(error)
        })

    }
    return (
        <div className='form-container'>
            <h1 className='form-titel'>Sign up</h1>
            <form onSubmit={handlerSubmit}>
                 <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                 </div>
                 <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                 </div>
                 <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                 </div>
                 <input className='btn-submit' type="submit" value="Sign up" />
            </form>
            <p>Already Have an account?<Link to='/login'>Log In</Link> </p>
            <p>{error}</p>
        </div>
    );
};

export default Signup;