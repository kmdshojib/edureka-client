import React from 'react'
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    const handleSubmitLoginForm = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email,password)
    }
  return (
    <form onSubmit={handleSubmitLoginForm} className="w-70 mt-5 align-items-center d-flex justify-content-center flex-column">
        <div className="orm-outline row mb-3">
            
            <label className="col-sm-3 col-form-label" htmlFor="email">Email</label>
            <div className='col-sm-9'>
            <input type="email" name="email" className="form-control" required/>
            </div>
        </div>

        <div className="form-outline row mb-3">

            <label className="col-sm-3 col-form-label" htmlFor="password">Password</label>
            <div className='col-sm-9'>
                <input type="password" name="password" className="form-control" required/>
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