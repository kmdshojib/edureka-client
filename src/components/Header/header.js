import React,{useContext} from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../contexts/userContext';

const Header = () => {
  const {user}  = useContext(AuthContext)
  
  return (
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand><NavLink to="/">Edureka</NavLink></Navbar.Brand>
        <Nav className="me-auto">
            {
              (user && user.uid) ? 
              <NavLink className="nav-link">Log Out </NavLink> 
              : 
              <>
                <NavLink className="nav-link" to="/login">Login</NavLink>
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </>
            
            }
        </Nav>
        </Container>
    </Navbar>
  )
}

export default Header