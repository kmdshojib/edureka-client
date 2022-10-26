import React,{useContext} from 'react'
import { Navbar,Container,Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../contexts/userContext';
import {FaUserAlt} from 'react-icons/fa'

const Header = () => {
  const {user,logOutUser}  = useContext(AuthContext)

  const handleLogOut = () =>{
    logOutUser()
    .then (() => {})
    .catch(error => console.log(error))
  }
  
  return (
    <Navbar collapseOnSelect  bg="light" variant="light">
        <Container>
        <Navbar.Brand><NavLink to="/">Edureka</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              {
                (user && user?.uid) ? 
                <NavLink className="nav-link" onClick={handleLogOut}>Log Out </NavLink> 
                : 
                <>
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/register">Register</NavLink>
                </>
              
              }
              <NavLink className="nav-link" to="/faq">FAQ</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
          </Nav>
          {
            (user && user?.uid) && 
            <Nav>
              <p className='me-2'>{user.displayName}</p>
              {
                user?.photoURL ?
                <Image style={{height:"30px",width:"30px"}} roundedCircle src={user.photoURL} />
                :
                <FaUserAlt />
              }
            </Nav>
          }
        </Navbar.Collapse>
        
        </Container>
    </Navbar>
  )
}

export default Header