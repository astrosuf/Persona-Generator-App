/** 
    Each "Actions" file in this folder is related to an aspect of the application. 
    An individual file will have an object that defines all the different types for the aspect
    of the application. We will look to export this object (i.e personatypes) in the respective
    reducer that uses them.
*/

import axios from 'axios';

export const personaTypes = {
    PERSONA_DETAILS_REQUEST: 'PERSONA/PERSONA_DETAILS_REQUEST',
    PERSONA_DETAILS_SUCCESS: 'PERSONA/PERSONA_DETAILS_SUCCESS',
    PERSONA_DETAILS_FAILURE: 'PERSONA/PERSONA_DETAILS_FAILURE'
}

export const getPersonaDetails = () => {
    return (dispatch) => {
        dispatch({type: personaTypes.PERSONA_DETAILS_REQUEST})
        axios.get("https://randomuser.me/api/?exc=login,registered,nat") 
        .then(res => {
            var personaObject =res.data.results[0]
            dispatch({type: personaTypes.PERSONA_DETAILS_SUCCESS, payload: personaObject })
        })
        .catch(error => {
            dispatch({type: personaTypes.PERSONA_DETAILS_FAILURE})
        })
    }
}