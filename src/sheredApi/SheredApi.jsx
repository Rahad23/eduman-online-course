import React from 'react';
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../firebase/Firebase.init';
import { useEffect } from 'react';

export const userDocument = createContext();

const auth = getAuth(app);
const SheredApi = ({children}) => {

    const GoogleProvider = new GoogleAuthProvider();
    const Gitprovider = new GithubAuthProvider();
     // togle dark and light mode
     const [togle, setTogle]=useState(false);
     // create switch togle dark and light
     const click=()=>{
         setTogle(!togle);
     }
    // user data
    const [userData, setUserData]= useState('')
     console.log(userData)
    // user redirect
    const [privetRedirect, setPrivetRedirect]=useState(true);
    // user register with email and password
    const createUserEmailAndPassword = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update user
    const UpdateUser=(userProfile)=>{
        setPrivetRedirect(true);
        return updateProfile(auth.currentUser, userProfile);
    }
    // send email verification
    const sendEmailverify = ()=>{
        setPrivetRedirect(true);
        return sendEmailVerification(auth.currentUser);
    }

    // user login function set
    const userLogin=(email, password)=>{
        setPrivetRedirect(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // tract user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setPrivetRedirect(false);
            setUserData(user);
        })
        return unsubscribe;
    },[])
    // user login with popup google
    const googleLogin=()=>{
        return signInWithPopup(auth, GoogleProvider);
    }
// user login github
const gitHubLogin=()=>{
    return signInWithPopup(auth, Gitprovider);
}
// Password reset email
const passwordReset=(email)=>{
    return sendPasswordResetEmail(auth, email);
}
    // suer sign out
    const userSingnOut=()=>{
        return signOut(auth);
    }
    const provider = 
{
        createUserEmailAndPassword, 
        UpdateUser, 
        sendEmailverify, 
        userLogin, 
        userData, 
        userSingnOut, 
        click, 
        togle, 
        privetRedirect, 
        googleLogin, 
        gitHubLogin, 
        passwordReset
};

    return (
        <userDocument.Provider value={provider}>
            {children}
        </userDocument.Provider>
        
    );
};

export default SheredApi;