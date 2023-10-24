import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../Styles/Navbar.css'
import logo from '../images/logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const changeBackground = () => {

    if (window.scrollY >= 10) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={nav ? 'nav_active' : nav}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="menu">
        <li><Link to="home" smooth = {true} duration={500} className='link'>HOME</Link></li>
        <li><Link to="about" smooth = {true} duration={500} className='link'>ABOUT</Link></li>
        <li><Link to="services" smooth = {true} duration={500} className='link'>SERVICES</Link></li>
        <li><Link to="contact" smooth = {true} duration={500} className='link'>CONTACT</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar