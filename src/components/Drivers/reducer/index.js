import React from 'react'
import { actions } from './actions'
import { initialState } from './constants'

export const reducer = (state = initialState,action) => {
  switch(action.type) {
    case actions.UPDATE_FORM:
        return{
            ...state,
            formData: {
                ...state.formData,
                [action.payload.name]: action.payload.value
            }
        }
    case actions.SUBMIT_FORM_REQUEST:
        return {
            ...state,
            submitForm: {
            ...state.submitForm,
            loading: true,
            success: false,
            error: "",
            },
        };
        case actions.SUBMIT_FORM_SUCCESS:
        return {
            ...state,
            submitForm: {
            ...state.submitForm,
            loading: false,
            success: true,
            error: "",
            },
        };
        case actions.SUBMIT_FORM_FAILURE:
        return {
            ...state,
            submitForm: {
            ...state.submitForm,
            loading: false,
            success: false,
            error: action.payload,
            },
        };
    default:
        return state;
  }
}
