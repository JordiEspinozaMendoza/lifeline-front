import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"

export const Navbar = () => {
  return (
    <div className='Nav'>
        <ul>
            <li>
              <Link to="/ambulances"> Ambulancias </Link>
                
            </li>
            <li>
                <Link to="/drivers"> Conductores </Link>
            </li>
        </ul>
    </div>
  )
}