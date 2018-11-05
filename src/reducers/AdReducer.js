
import {adTypes} from "../actions/AdActions";

const INITIAL_STATE = {
    isAdError: false,
    error: ""
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case adTypes.ADMOB_ERROR:
            return {...state, isAdError: true, error: action.payload}
        default: 
            return state
    }

}


