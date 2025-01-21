import React from 'react'
import logo from '../images/logo.jpg'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { TbSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <nav className='Header'>
        <img src={logo} alt='AA'/>
        <div className='links'>
            <Link to='/' as={NavLink}>AA-movies</Link>
            <Link to='/' as={NavLink}>Popular-ones</Link>
            <Link to='/' as={NavLink}>Pushpa-series</Link>
            <Link to='/'as={NavLink}>My-List</Link>
        </div>
        <TbSearch />
        
        <CgProfile />

    </nav>
  )
}

export default Navbar