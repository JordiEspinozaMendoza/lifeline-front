import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"


export const Navbar = () => {
  return (
    <div className='Nav'>
       <div>
        <a class="Titulo" href="/"> Lifeline</a>
        </div>
        <div class="Botones">
            <Link to="/ambulances"> 
            <button className="Ambu"> Ambulancias</button> </Link>
          
          {/* (a) es link */}
            <Link to="/drivers">
            <button className="Condu"> Conductores </button></Link>
        </div>
    </div>
  )
}