import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.sass"

export const Navbar2 = () => {
 
  console.log(window.location.pathname)

  return (
    <div className='Nav2'>
       <div>
        <a class="Titulo" href="/"> Lifeline</a>
        </div>
    </div>
  )
}