import React, { createContext, useEffect, useState } from 'react'

// Authentication 
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
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

    // google sign in
    const googleSignIn = () => signInWithPopup(auth, provider)

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            console.log("google sign In", currentUser);
        })
        return () => unsbscribe()
    },[])

    const authInfo = {createUser,signIn,googleSignIn,user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext