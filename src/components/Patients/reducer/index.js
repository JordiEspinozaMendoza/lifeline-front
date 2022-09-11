import { actions } from './actions'
import { initialState } from './constants'

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_PATIENTS_REQUEST:
        return {
            ...state,
            getPatient: {
                ...state.getPatient,
                loading: true,
                success: false,
                error: false
            },

        }
    case actions.GET_PATIENTS_SUCCESS:
        return {
            ...state,
            getPatient: {
                ...state.getPatient,
                loading: false,
                success: true,
                data: action.payload
            }
        }
    case actions.GET_PATIENTS_FAILURE:
        return {
            ...state,
            getPatient: {
                ...state.getPatient,
                loading: false,
                success: false,
                error: true,
            }
        }
    default:
        return state;
  }
}