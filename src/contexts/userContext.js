import React, { createContext } from 'react'

// Authentication 
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {app} from '../firebase.init'

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {

    const provider = new GoogleAuthProvider();
    
    //  creating user with email and password
    const createUser = (email, password) =>  createUserWithEmailAndPassword(auth,email,password);

    // signing user with email and password

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    // google sign in
    const googleSignIn = () => signInWithPopup(auth, provider)

    const authInfo = {createUser,signIn,googleSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext