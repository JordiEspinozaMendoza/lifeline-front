import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"
import Lifeline from "./Lifeline2.png"
export const Navbar2 = () => {
 
  return (
    <div className='Nav2'>
      <img class="Logo"src={Lifeline} alt="" />
        <a class="Titulo2" href="/"> Lifeline</a>
        <hr/>
    </div>
  )
}