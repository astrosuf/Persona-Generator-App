import {personaTypes} from '../actions/PersonaActions';

const INITIAL_STATE = {
    persona: {},
    isLoading: false,
    error: ""
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case personaTypes.PERSONA_DETAILS_REQUEST:
            return {...state, isLoading: true}

        case personaTypes.PERSONA_DETAILS_SUCCESS:
            return {...state, isLoading: false, persona: action.payload}

        case personaTypes.PERSONA_DETAILS_FAILURE:
            return {...state, isLoading: false, error:"Something went wrong with the request, please try again"}

        default:
            return state
    }
}