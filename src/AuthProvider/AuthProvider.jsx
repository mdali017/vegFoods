import React, { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';


export const  AuthContext = createContext(null);
       const auth = getAuth(app)
       const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // -------- Create User --------
    const createUser = (email, password) =>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // -------- Sign In -----------
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // --------- sign In With Google ---------
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // --------- Reset Password -----------
    const resetPassword = email =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    // ---------- Sign Out -------------
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // ----------- Update User Profile and Photo URL ----------------
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // ------------ UseEffect for catching Current User --------
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
           
            console.log('current user', currentUser)
            setLoading(true)
        })
        return () =>{
            return unsubscribe();
        }
    },[])
    
    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;