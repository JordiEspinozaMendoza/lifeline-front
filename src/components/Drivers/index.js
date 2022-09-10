import React from 'react'
import "./styles.sass"

export const Drivers = () => {
  return (
    <div className='drivers__'>
      <div className='drivers__left'>
        <h2>Alta deconductores</h2>
        <button>Return</button>
        <button>Ambulances</button>
      </div>
      <div className='drivers__right'>
        <form className='drivers__form'>
          <label htmlFor='IdDriver'>
            Driver's ID
            <input type='text' id='IdDriver' name='IdDriver'/>
          </label>
          <label htmlFor='Name'>
            Driver's Name
            <input type='text' id='Name' name='Name'/>
          </label>
          <label htmlFor='email'>
            Driver's Email
            <input type='text' id='email' name='email'/>
          </label>
          <label htmlFor='Phone'>
            Driver's Phone
            <input type='number' id='Phone' name='Phone'/>
          </label>
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
