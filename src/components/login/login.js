import React,{useContext} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '.././../contexts/userContext'

import {FcGoogle} from 'react-icons/fc';
import {BsGithub} from 'react-icons/bs';
import { toast } from 'react-toastify';

import './login.css'


const LogIn = () => {

    const { signIn,googleSignIn,gitHubSignIn } = useContext(AuthContext)

    // react router dom 
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
        signIn(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            form.reset()
          
        })
        .catch(err=>{
            toast.error(err.message)
        })
    }


    const googleSignHandler = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    // github sign in
    const githubSignInHandler = () =>{
        gitHubSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => toast.error(error.message))
    }
    navigate(from, {replace: true});
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

            <button type="button" className="btn btn-lg btn-link btn-floating mx-1" onClick={googleSignHandler}>
                <FcGoogle />
            </button>
             <button type="button" className="btn btn-lg  btn-link btn-floating mx-1" onClick={githubSignInHandler}>
                <BsGithub />
            </button>
            
        </div>
    </form>
  )
}

export default LogIn