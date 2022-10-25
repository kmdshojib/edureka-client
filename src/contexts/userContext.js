import React, { createContext, useEffect, useState } from 'react'

// Authentication 
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth'
import {app} from '../firebase.init'

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();
    
    //  creating user with email and password
    const createUser = (email, password) =>  createUserWithEmailAndPassword(auth,email,password);

    // signing user with email and password

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const updateUserProfile =(profile) => updateProfile(auth.currentUser,profile)

    // google sign in
    const googleSignIn = () => signInWithPopup(auth, provider)

    // log out user
    const logOutUser = () =>  signOut(auth)
    
    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            console.log("google sign In", currentUser);
        })
        return () => unsbscribe()
    },[])

    // contexts
    const authInfo = {createUser,signIn,googleSignIn,user ,logOutUser,updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext