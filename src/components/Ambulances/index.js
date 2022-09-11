import React from 'react'
import './styles.sass'
import axios from 'axios'
import {useReducer} from 'react'
import {reducer} from './reducer'
import {actions} from './reducer/actions'
import {initialState} from './reducer/constants'
import {petition} from '../../petition'

export const Ambulances = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const{name, value} = e.target;
    dispatch({
      type: actions.UPDATE_FORM,
      payload: {
        name,
        value,
      },
    });
  };	
  const handleSubmit = (e) => {
    e.preventDefault()
    petition({
      url: `ambulance/` ,
      method: "POST",
      body: state.formData,
      constants: {
        REQUEST: actions.SUBMIT_FORM_REQUEST,
        SUCCESS: actions.SUBMIT_FORM_SUCCESS,
        FAIL: actions.SUBMIT_FORM_FAILURE
      },
      dispatch: dispatch,
    })
  }
  return (
    <div class="Ambul">
      <div class="Ambul__left">
      <h2> Discarge from Ambulances </h2>
      </div>
      <div className='Ambulancias_right'>
        <form className='ambulancias__form' onSubmit={handleSubmit}>
          <label htmlFor='PLAmbulance'>
           Ambulance plate
          <input type='text' id='plate' name='plate' placeholder='"4785-BA5"' onChange={handleChange} />
          </label>
          <button type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
    
  )
}
