import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

const Header = () => {
  let activeStyle = {
    color: "#0088cc"
  };
  return (
    <header id="site-header">
        <div id="site-header-container">
          <div id="site-header-logo">
            <img src={logo} alt="" className="logo-image" />
          </div>
  
          <div id="top-menu-container">
            <nav id="top-menu">
              <ul id="main-menu">
                <li className="main-menu-item">
                  <NavLink to="/" 
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Home</NavLink>
                </li>
                <li className="main-menu-item">
                  <NavLink to="/table" 
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Table</NavLink>
                </li>
                <li className="main-menu-item">
                  <NavLink to="/card" 
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Card</NavLink>
                </li>
                <li className="main-menu-item">
                  <NavLink to="/dropdown" 
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Multilevel Dropdown</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header