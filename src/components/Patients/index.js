import React from 'react'
import { useReducer, useEffect } from 'react'
import { reducer } from './reducer'
import { actions } from './reducer/actions'
import { initialState } from './reducer/constants'
import { petition } from '../../petition'

export const Patients = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        petition({
            url: `patient/` ,
            method: "GET",
            body: null,
            constants: {
              REQUEST: actions.GET_PATIENTS_REQUEST,
              SUCCESS: actions.GET_PATIENTS_SUCCESS,
              FAIL: actions.GET_PATIENTS_FAILURE
            },
            dispatch: dispatch,
          })
    },[])
    var auxPatient = state.getPatient.data
    return (
        <div className="Cuerpo">
            <h1>Patients</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(auxPatient) ? (auxPatient).map(e => {
                        return(
                            <tr>
                                <td>{e.name}</td>                                 
                                <td>{e.lastName}</td>
                                <td>{e.age}</td>
                            </tr>
                        )
                    }) : null}

                </tbody>
        </table>
        </div>
    );

}
