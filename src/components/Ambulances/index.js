import React from 'react'
import {useState } from 'react'
import './styles.sass'
import axios from 'axios'

export const Ambulances = () => {
  const [ambulances, setAmbulances] = useState([])
  return (
    <div class="Ambul">
      <h3 class="H3"> Discarge from Ambulances </h3>
        <form class="Forms"> 
        {/* Placa ambulancia */}
        <div class="Formulario">
          <label class="PlacaA"> License Plate </label>
          <input type="text" name="PlacaA" placeholder='License Plate' class="PlA" />
        {/* Nombre Conductor */}
        <label class="NombreC"> Name of the driver
          </label>
        <input type="text" name="NombreC" class="NomC" placeholder='Name of the driver'/>
            
            <label class="Sucursales">Branch offices </label>
            <select class="Selectores">
              <option value="1">Branch 1</option>
              <option value="2">Branch 2</option>
              <option value="3">Branch 3</option>
              <option value="4">Branch 4</option>
            </select>

            <button class="Boton"> Submit</button>

            </div>
        </form>

    </div>
    
  )
}
