import React,{useContext, useState} from 'react'
import { Navbar,Container,Nav, Image, OverlayTrigger,Tooltip } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from './../../contexts/userContext';
import {FaUserAlt} from 'react-icons/fa'

import './header.css'

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
  // react tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.displayName}
    </Tooltip>
  );
  return (
    <Navbar collapseOnSelect  bg="light" variant="light">
        <Container>
        <Navbar.Brand>
          <Image style={{height:"25px",width:"25px"}}  src="https://w7.pngwing.com/pngs/276/275/png-transparent-codewars-social-set-round-icon-thumbnail.png" />
          <NavLink to="/" className="title-header fw-bold">Edureka</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto pt-3">
              <NavLink className="nav-link font-size-nav" to="/">Course</NavLink>
              <NavLink className="nav-link font-size-nav" to="/faq">FAQ</NavLink>
              <NavLink className="nav-link font-size-nav" to="/blog">Blog</NavLink>
              <p onClick={handleTheme} className="nav-link font-size-nav">{theme}</p>
          </Nav>

          <Nav>
            {
                (user && user?.uid) ? 
                <NavLink className="nav-link font-size-nav" onClick={handleLogOut}>Log Out </NavLink> 
                : 
                <>
                  <NavLink className="nav-link font-size-nav" to="/login">Login</NavLink>
                  <NavLink className="nav-link font-size-nav" to="/register">Register</NavLink>
                </>
              
              }
              
          {
            (user && user?.uid) && 
            <div>
              {/* tooltip user name */}
              <OverlayTrigger 
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                >
                {
                  user?.photoURL ?
                  <Image className='mt-2' style={{height:"30px",width:"30px"}} roundedCircle src={user.photoURL} />
                  :
                  <FaUserAlt />
                }
              </OverlayTrigger>
            </div>
          }
          </Nav>
          
        </Navbar.Collapse>
        
        </Container>
    </Navbar>
  )
}

export default Header