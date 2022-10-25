import React, { createContext } from 'react'

// Authentication 
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase.init'

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {

    const signInwithEmailAndpassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {signInwithEmailAndpassword}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext