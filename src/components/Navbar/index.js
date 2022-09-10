import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"

export const Navbar = () => {
  return (
    <div className='Nav'>
        <ul>
            <li>
              <Link to="/ambulances"> Ambulances </Link>
                
            </li>
            <li>
                <Link to="/drivers"> Drivers </Link>
            </li>
            <li>
                <Link to="/prueba"> prueba </Link>
            </li>
        </ul>
    </div>
  )
}