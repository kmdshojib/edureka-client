import React,{useContext, useState} from 'react'
import { Navbar,Container,Nav, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../contexts/userContext';
import {FaUserAlt} from 'react-icons/fa'


const Header = () => {
  const {user,logOutUser}  = useContext(AuthContext)

  const [theme,setTheme] = useState("Light") 

  const handleLogOut = () =>{
    logOutUser()
    .then (() => {})
    .catch(error => console.log(error))
  }
  // toggle the theme
  const handleTheme = () => {
    const dark = theme === "Light"? "Dark" : "Light"
    setTheme(dark)
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
              <NavLink className="nav-link" to="/">Course</NavLink>
              
          </Nav>
          <p onClick={handleTheme} className="nav-link">{theme}</p>
          {
            (user && user?.uid) && 
            <Nav >
              <NavLink className="nav-link" to="/checkout">Check Out</NavLink>
              <p className='me-2 nav-link'>{user.displayName}</p>
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