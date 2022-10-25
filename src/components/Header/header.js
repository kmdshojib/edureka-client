import React,{useContext} from 'react'
import { Navbar,Container,Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../contexts/userContext';
import {FaUserAlt} from 'react-icons/fa'

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
        {
          (user && user.uid) && 
          <Nav>
            <p className='me-2'>{user.displayName}</p>
            {
              user.photoURL ?
              <Image style={{height:"30px",width:"30px"}} roundedCircle src={user.photoURL} />
              :
              <FaUserAlt />
            }
          </Nav>
        }
        </Container>
    </Navbar>
  )
}

export default Header