import React from 'react'
import { actions } from './actions'
import { initialState } from './constants'

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_AMBULANCE_REQUEST:
        return {
            ...state,
            getAmbulance: {
                ...state.getAmbulance,
                loading: true,
                success: false,
                error: false
            },

        }
    case actions.GET_AMBULANCE_SUCCESS:
        return {
            ...state,
            getAmbulance: {
                ...state.getAmbulance,
                loading: false,
                success: true,
                data: action.payload
            }
        }
    case actions.GET_AMBULANCE_FAILURE:
        return {
            ...state,
            getAmbulance: {
                ...state.getAmbulance,
                loading: false,
                success: false,
                error: true,
            }
        }
    case actions.GET_DRIVER_REQUEST:
        return {
            ...state,
            getDriver: {
                ...state.getDriver,
                loading: true,
                success: false,
                error: false,
            }
        }
    case actions.GET_DRIVER_SUCCESS:
        return {
            ...state,
            getDriver: {
                ...state.getDriver,
                loading: false,
                success: true,
                data: action.payload
            }
        }
    case actions.GET_DRIVER_FAILURE:
        return {
            ...state,
            getDriver: {
                ...state.getDriver,
                loading: false,
                success: false,
                error: true
            }
        }
    default:
        return state;
  }
}
