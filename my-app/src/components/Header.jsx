import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <header>
    <div className="container">
        <div className="row align-items-center texts">
            <div className="col-lg-2 col-3  left">
            <Link to="/">Shop</Link>
            </div>
            <div className="col-lg-10 col-12 text-end right">
            <Link to="/">Home</Link>
            <Link  to="/about">About</Link>
            <Link className='btn btn-danger fw-bold' to="/exp">Expensive Products</Link>
            </div>
        </div>
    </div>
   </header>
  )
}

export default Header