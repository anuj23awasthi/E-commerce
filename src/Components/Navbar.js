import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <b><link  href="/frontend/src/navbar logo.png"   alt="Logo" className="img" /></b>
      <h1 className="logo">shopping-Zone</h1>
      <div className='item bar'>
        <b><Link to="/" className='home'>Home</Link></b>
        <b><Link to="/product" className='product'> Product</Link></b>
        <b><Link to="/add" className='add'><img src="https://cdn.iconscout.com/icon/free/png-256/free-cart-1772441-1508337.png?f=avif&w=128" className='img-cart'alt='img'/></Link></b>
      
        <b><Link to="/login" className='login'>Login</Link></b>
        
      </div>
      
    </div>
  )
}x
