import React from "react";
import'./styles.sass'
import { useState, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { actions } from "./reducer/actions";
import { initialState } from "./reducer/constants";
import { petition } from "../../petition";

export const Check = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        petition({
            url: `ambulance/` ,
            method: "GET",
            body: null,
            constants: {
              REQUEST: actions.GET_AMBULANCE_REQUEST,
              SUCCESS: actions.GET_AMBULANCE_SUCCESS,
              FAIL: actions.GET_AMBULANCE_FAILURE
            },
            dispatch: dispatch,
          })
    },[])
    var auxAmbulance = state.getAmbulance.data
    console.log(auxAmbulance)
    return (
        <div className="Cuerpo">
            <h1>Check</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Ambulance plates</th>
                        <th>Ambulance drivers</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(auxAmbulance) ? (auxAmbulance).map(e => {
                        return(
                            <tr>
                                <td>{e.plate}</td>                                 
                                <td>{e.driver === null ? "N/A" : e.driver[0]['name']}</td>
                            </tr>
                        )
                    }) : null}

                </tbody>
        </table>
        </div>
    );

}
