// {
// import React from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import './header.css';

// function Header() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand href="#">Chameleon</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse id="navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/portfolio">Portfolio</Nav.Link>
//           <Nav.Link href="/blog">Blog</Nav.Link>
//           <Nav.Link href="/newsletter">Newsletters</Nav.Link>
//           <Nav.Link href="/contact">Contact</Nav.Link>
//           <Nav.Link href="/about">About us</Nav.Link>
//           <Nav.Link href="/report">Report</Nav.Link>

//           <NavDropdown title="Resources" id="resources-dropdown" class="nav-bar-dropdowns">
//             <Nav.Item className='nav-bar-dropdown-items'>
//               <Nav.Link href="/calendar" className='nav-bar-dropdown-items-a'>Events Calendar</Nav.Link>
//             </Nav.Item>

//             <Nav.Item className='nav-bar-dropdown-items'>
//               <Nav.Link href="/faq">Emerging Tech</Nav.Link>
//             </Nav.Item> 

//             <Nav.Item className="nav-bar-dropdown-items">
//               <Nav.Link href="/resources">Emerging Tech</Nav.Link>
//             </Nav.Item> 

//           </NavDropdown>

//         </Nav>
        
//         <Nav>
//           <Nav.Link href="#">Login</Nav.Link>
//         </Nav>
//         <Nav>
//           <Nav.Link href="/hello">Demo Page</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;
// }

import React from "react";
import {NavLink} from 'react-router-dom';
//import './header.css';
import { useState } from "react";
import logo from './images/logo.png';

import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { styled } from "styled-components";

function Header() {
  
  const [drop, setDrop] = useState(false);

  const toggleDropdown = () => {
    setDrop(!drop);
  };

  return (
    <Wrapper>
    <nav className = "navbar">
      <div className="brandLogo">
        <img src={logo} alt='Brand Logo'/>
      </div>
      <div className={`navLinks ${drop && "drop"}`}> 
        <Nav.Link className="link" href="/">HOME<div className="space"></div></Nav.Link>
        <Nav.Link className="link_portfolio" href="/portfolio">PORTFOLIO<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/blog">BLOG<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/newsletter">NEWSLETTERS<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/contact">CONTACT<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/about_us">ABOUT US<div className="space"></div></Nav.Link>
        <Nav.Link className="link" href="/report">REPORT<div className="space"></div></Nav.Link>

        {/*<NavLink className="link" to="/resource">RESOURCE<div className="space"></div></NavLink>*/}
        
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <NavLink className="link" to="/resource">RESOURCE</NavLink>
          <div className={`dropdown-content ${drop && "show"}`}>
            <Nav.Link href="/events">Events Calendar</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/emerging-tech">Emerging Tech</Nav.Link>
          </div>
        </div>

        <Nav.Link className="link_login" href="/login">
          <button className="loginButton">LOGIN</button>
        </Nav.Link>
        
      </div>

    </nav>
</Wrapper>
  );
}
const Wrapper = styled.div`
/* header_white.css */

/* Your existing CSS styles */
/* header_white.css */

/* Base styles for the header */
.navbar {
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brandLogo img {
  width: 100px;
  height: auto;
}

.navLinks {
  display: flex;
  align-items: center;
}

.navLinks a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
  position: relative;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #333;
  min-width: 200px;
  top: 100%;
  left: 0;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;
}

.dropdown-content a:hover {
  background-color: #444;
}

/* Space between menu items */
.space {
  width: 10px;
}

/* Show the dropdown content on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

.loginButton {
  padding: 5px 10px;
  background-color: #666;
  color: white;
  border: none;
  cursor: pointer;
}

/* Media query for responsiveness */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navLinks {
    flex-direction: column;
    align-items: center;
  }

  .navLinks a {
    margin: 5px;
  }

  .dropdown-content {
    position: static;
    display: flex;
    flex-direction: column;
  }

  .dropdown .show {
    display: flex;
  }
}

/* Add media queries for responsiveness */
@media screen and (max-width: 960px) {
  .navbar {
    flex-direction: column;
  }

  .brandLogo img {
    width: 100px;
    height: auto;
  }
  .navLinks {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navLinks a {
    margin-bottom: 10px;
  }

  .dropdown {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dropdown-content {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dropdown .show {
    display: flex;
  }
}

`

export default Header