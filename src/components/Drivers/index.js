import React from 'react'
import "./styles.sass"
import axios from 'axios'
import { useReducer } from 'react'
import { reducer } from './reducer'
import { actions } from './reducer/actions'
import { initialState } from './reducer/constants'
import { petition } from '../../petition'

export const Drivers = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
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
    // axios.post(`https://lifeline-hack.herokuapp.com/api/driver/`, (state.formData))
    //   .then(res => {
    //     console.log(res)
    //     console.log(res.data)
    //   })
    petition({
      url: `driver/` ,
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
  console.log(state)
  return (
    <div className='drivers__'>

      <div className='drivers__left'>
        <h2> Driver registration </h2>
      </div>
      <div className='drivers__right'>
        <form className='drivers__form' onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Driver's Name
            <input type='text' id='name' name='name' placeholder='Example: "Michael"'onChange={handleChange}/> 
          </label>
          <label htmlFor='lastName'>
            Driver's LastName
            <input type='text' id='lastName' name='lastName'placeholder='Example: "Scott"' onChange={handleChange}/>
          </label>
          <label htmlFor='phone'>
            Driver's Phone
            <input type='text' id='phone' name='phone'placeholder='Example: "(664) 845 9871"' onChange={handleChange}/>
          </label>
          <button type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
