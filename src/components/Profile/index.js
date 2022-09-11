import React from "react";
import "./styles.sass";

export const Profile = () => {

    
    return(   
    <div className='Profile__'>

    <div className='Profile_Left'>
      <h2> Login </h2>
    </div>
    <div className='Profile_Right'>
      <form className='Profile__form'>
        <label htmlFor='Email'>
          User's Email
          <input type='text' id='email' name='email' placeholder='Example: "Hector.lucero@gmail.com"'/> 
        </label>
        <label htmlFor='Password'>
          Password
          <input type='text' id='Password' name='Password'placeholder='Example: "************"' />
        </label>
        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  </div>
    )
}
