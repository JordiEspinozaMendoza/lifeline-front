import React from "react";
import'./styles.sass'
import { useState } from "react";


export const Check = () => {
    
    
    return (
        <div class="Cuerpo">
        <h1>Check</h1>
        
        <div class="tabla">
            <form class="tabla_form">
            <table>
            <tr>
                <th> Ambulance Plate</th>
                <th> Driver's Name</th>
            </tr>
            {/* Aqui van a ir las ambulancias dependiendo de cuantas se dan de alta */}

            <tr>
                <td> 1234</td>
                <td> Juan</td> 
            </tr>
            <tr>
                <td> 5678</td>
                <td> Pedro</td>
            </tr>
             </table>
             </form>
        </div>







        </div>
    );

}
