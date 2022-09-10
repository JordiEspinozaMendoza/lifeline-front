import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"
import { useLocation } from 'react-router-dom'

export const Navbar = () => {
 
  console.log(window.location.pathname)

  return (
    <div className='Nav'>
       <div>
        <a class="Titulo" href="/"> Lifeline</a>
        </div>

        <div class="BotonesNav">
            <Link to="/ambulances"> 
            <button> Ambulancias</button> </Link>

            <Link to="/drivers">
            <button > Conductores </button></Link>

            <Link to="/Check">
            <button > Check </button></Link>
        </div>
    </div>
  )
}