import React from "react";
import './Home.sass'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="Home">
      <div class="Botones">   
            <Link to="/ambulances"> 
            <button> Ambulancias</button> </Link>
           
            <Link to="/drivers">
            <button > Conductores </button></Link>

            <Link to="/check">
            <button > Check </button></Link>
        </div>
    </div>
  );
}