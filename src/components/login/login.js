import React from 'react'
import { NavLink } from 'react-router-dom';

import './login.css'

const LogIn = () => {
    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email,password)
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
            <p>or sign up with:</p>
            {/* <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
            </button> */}
        </div>
    </form>
  )
}

export default LogIn