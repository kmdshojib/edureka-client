import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';

import { AuthContext } from '.././../contexts/userContext'

import {FcGoogle} from 'react-icons/fc';
import {BsGithub} from 'react-icons/bs';
import './login.css'

const LogIn = () => {

    const { signIn,googleSignIn } = useContext(AuthContext)

    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
        signIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        console.log(email,password)
    }

    const googleSignHadler = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
            alert("google Sign added", user.displayName)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <form onSubmit={handleSubmitLoginForm} className="w-70 mt-5 align-items-center d-flex justify-content-center flex-column"  >

        <div className="form-outline d-flex mb-4">
            
            <label className="form-label me-4" htmlFor="email">Email</label>
            <div className=''>
                <input type="email" name="email" className="form-control form-width" required/>
            </div>
        </div>

        <div className="form-outline d-flex mb-3">

            <label className="col-form-label me-2" htmlFor="password">Password</label>
            <div className=''>
                <input type="password" name="password" className="form-control form-width" required/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


        <div className="text-center">
            <p>Not a member? <NavLink to="/register">Register</NavLink></p>
            <p>or sign in with:</p>

            <button type="button" className="btn btn-lg btn-link btn-floating mx-1" onClick={googleSignHadler}>
                <FcGoogle />
            </button>
             <button type="button" className="btn btn-lg  btn-link btn-floating mx-1">
                <BsGithub />
            </button>
            
        </div>
    </form>
  )
}

export default LogIn