import data from "./data"

const initialState = data;

const apiCall = (state = initialState, action) =>{
    if(action.type === "APIREQUEST")
    {
        return action.payload;
    }
    else return state;
}

export default apiCall;