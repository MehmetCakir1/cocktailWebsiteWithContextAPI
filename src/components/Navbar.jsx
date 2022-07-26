import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"


const Navbar = () => {
  return (
    <nav className=' d-flex justify-content-between align-items-center p-3'>
      <div className='logo px-3 fw-bold fs-3'>
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div className="links d-flex gap-3 px-3 ">
        <Link className='fw-bold text-decoration-none text-dark fs-4' to="/">Home</Link>
        <Link className='fw-bold text-decoration-none text-dark fs-4' to="/about">About</Link>
      </div>

    </nav>
  )
}

export default Navbar