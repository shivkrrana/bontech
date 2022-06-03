const initialState = '';

const updatedInput = (state =initialState, action)=>{

    if(action.type === "PASSVALUE")
    {
        return action.payload
    }
    else 
    return state
   
}
export default updatedInput;