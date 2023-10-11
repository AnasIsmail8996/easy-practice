import React from 'react'
import './App.css'
import {NavLink} from 'react-router-dom'
const NavbarList = () => {
  return (
    <div>

<nav className='nav-links'>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/Services">Services</NavLink>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavbarList