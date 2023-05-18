import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


    const googleProvider = new GoogleAuthProvider();



    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);



    // Register with email and password
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // update user name
    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, { displayName: name });
    }


    // login with google
    const google = () => {
        return signInWithPopup(auth, googleProvider);
    }





    // logout 
    const logOut = () => {

        return signOut(auth);
    }

    // configure observer to get user 
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        };
    }, [])

    // Context value
    const authInfo = {
        createUser,
        loginUser,
        google,
        logOut,
        updateUserProfile,
        user,
        loading
    }


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;