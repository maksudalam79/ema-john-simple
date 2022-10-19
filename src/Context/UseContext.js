import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext=createContext()
const Auth=getAuth(app)

const UseContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [lodding,setLodding]=useState(true)
    // create new account
    const createuser=(email,password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(Auth,email,password,setUser)
    }
    // log in account
    const login=(email,password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(Auth,email,password)
    }
    const logOut=()=>{
        setLodding(true)
        return signOut(Auth)
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(Auth,currentUser=>{
            console.log('current user inside state change',currentUser)
           setUser(currentUser)
           setLodding(false)
        })
        return ()=>unSubscribe()
        },[])
const authInfo={user,lodding,createuser,login,logOut}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;