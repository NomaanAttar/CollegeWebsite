import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import {Link } from 'react-scroll'
import menu_icon from '../../assets/images/menu-icon.png'

function Navbar() {

  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 70 ? setSticky(true) :setSticky(false)
    })
  },[])

  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ?'dark-nav' :''}`}>
        <img src={logo} alt="logo" className='logo' />
        <ul className={mobileMenu ? '':'mobile-menu'}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li> <Link to='program' smooth={true} offset={-250} duration={500}>Program</Link></li>
            <li> <Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li> <Link to='campus' smooth={true} offset={-230} duration={500}>Campus</Link></li>
            <li> <Link to='textinomials' smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-250} duration={500} className='btn'>ContactUs</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
