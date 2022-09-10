import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"


export const Navbar = () => {
  return (
    <div className='Nav'>
       <div class="Titulo">
        Lifeline
        </div>

        <button className="Ambu">
          <Link to="/ambulances"> Ambulancias </Link>
        </button>
        {/* (a) es link */}
        <button className="Condu">
          <Link to="/drivers"> Conductores </Link>
        </button>
    </div>
  )
}