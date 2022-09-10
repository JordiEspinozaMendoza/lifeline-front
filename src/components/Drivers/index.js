import React from 'react'
import "./styles.sass"
import axios from 'axios'
import { Home } from '../Home'
export const Drivers = () => {

  const handleSubmit = (e) => {

  }
  return (
    <div className='drivers__'>

      <div className='drivers__left'>
        <h3 > Registration of drivers </h3>
      </div>
      <div className='drivers__right'>
        <form className='drivers__form' onSubmit={handleSubmit}>
          <label htmlFor='IdDriver'>
            Driver's ID
            <input type='text' id='IdDriver' name='IdDriver'/>
          </label>
          <label htmlFor='Name'>
            Driver's Name
            <input type='text' id='Name' name='Name'/>
          </label>
          <label htmlFor='email'>
            Driver's LastName
            <input type='text' id='LastName' name='LastName'/>
          </label>
          <button type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
