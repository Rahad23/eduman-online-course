import React from 'react';
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from './../firebase/Firebase.init';
import { useEffect } from 'react';

export const userDocument = createContext();

const auth = getAuth(app);
const SheredApi = ({children}) => {
    // user data
    const [userData, setUserData]= useState(null)
    // user register with email and password
    const createUserEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update user
    const UpdateUser=(userProfile)=>{
        return updateProfile(auth.currentUser, userProfile);
    }
    // send email verification
    const sendEmailverify = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    // user login function set
    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    // tract user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setUserData(user);
        })
        return unsubscribe;
    },[])
    const provider = {createUserEmailAndPassword, UpdateUser, sendEmailverify, userLogin, userData};

    return (
        <userDocument.Provider value={provider}>
            {children}
        </userDocument.Provider>
        
    );
};

export default SheredApi;