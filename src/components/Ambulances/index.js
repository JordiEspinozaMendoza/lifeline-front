import React from 'react'
import {useState } from 'react'
import './styles.sass'
import axios from 'axios'

export const Ambulances = () => {
  
  return (
    <div class="Ambul">
      <div class="Ambul__left">
      <h3 > Discarge from Ambulances </h3>
      </div>
      <div className='Ambulancias_right'>
        <form className='ambulancias__form'>
          <label htmlFor='PLAmbulance'>
           Ambulance plate
          <input type='text' id='IdAmbulance' name='IdAmbulance'/>
          </label>
          <label htmlFor='Name'>
            Driver's Name
            <input type='text' id='Name' name='Name'/>
          </label>
          <button type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
    
  )
}
