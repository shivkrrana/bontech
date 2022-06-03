import { combineReducers } from "redux";
import apiCall from "./reducerApi"
import updatedInput from "./reducerInput"



const rootReducer = combineReducers({
    apiCall,updatedInput
})

export default rootReducer;