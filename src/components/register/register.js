import React from 'react'
import { NavLink } from 'react-router-dom'


const Register = () => {

    const handleRegistrationForm = (e) =>{

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email,password)

    }
  return (
    <form onSubmit={handleRegistrationForm} className="mt-5 align-items-center d-flex justify-content-center flex-column">

        <div className="form-outline d-flex mb-3">
            
            <label className="col-form-label me-2" htmlFor="name">Full Name</label>
            <div className=''>
                <input type="name" name="name" className="form-control form-width" required/>
            </div>
        </div>

        <div className="form-outline d-flex mb-3">
            
            <label className="col-form-label me-5" htmlFor="email">Email</label>
            <div className=''>
                <input type="email" name="email" className="form-control form-width" required/>
            </div>
        </div>

        <div className="form-outline d-flex mb-3">

            <label className="col-form-label me-3" htmlFor="password">Password</label>
            <div className=''>
                <input type="password" name="password" className="form-control form-width" required/>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>


        <div className="text-center">
            <p>Have an account? <NavLink to="/login">Login</NavLink></p>
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

export default Register