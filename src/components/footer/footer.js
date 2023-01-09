import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3">
                    <span> © 2023 Copyright: </span>
                    <Link className="text-dark text-decoration-none fw-bolder" to="/">Edureka</Link>
                </div>
            </footer>
        </div>
    )
}
