import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase.config';

export const AuthContext=createContext(null)
const auth=getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider;


     const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }
     const logOut=()=>{
        setLoading(true)
        return signOut(auth)
     }
     useEffect(()=>{
        const unsubsCribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
    return()=>{
        return unsubsCribe();
    }
        
     },[])
 
    const authInfo={
        user,
        signUp,
        logIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;