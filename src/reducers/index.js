import { combineReducers } from "redux";
import PersonaReducer from "./PersonaReducer"


export default combineReducers ({
    personaDetails: PersonaReducer
})
