import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand><NavLink to="/">Edureka</NavLink></Navbar.Brand>
        <Nav className="me-auto">
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Header