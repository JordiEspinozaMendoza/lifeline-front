import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"
import Lifeline from "./Lifeline2.png"


export const Navbar = () => {
  return (
    <div className='Nav'>
      <div className="LogoI">
            <img class="Logo"src={Lifeline} alt="" />
            <a class="Titulo" href="/">Lifeline </a>
        </div>

        <div className = "BotonesNav">
          <Link to="/Profile">
            <button> Profile </button>
          </Link>
            <Link to="/ambulances"> 
            <button> Ambulances</button> </Link>

            <Link to="/drivers">
            <button > Drivers </button></Link>

            <Link to="/patients">
            <button > Patients </button></Link>

            <Link to="/check">
            <button > Check </button></Link>

            <Link to="/ambulances/active">
            <button > Active ambulances </button></Link>

        </div> 
    </div>

  )
}