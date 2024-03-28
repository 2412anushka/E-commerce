import React from 'react'
import {Link} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <h2 className='pacifico-regular'>Peppyfry.com</h2>
        <Link to="/signup"><button className='sign poppins-regular'>Sign Up</button></Link>
        <FontAwesomeIcon  icon={faCartShopping} size="lg" style={{color: "#000000",}} />
    </div>
  )
}

export default Nav
