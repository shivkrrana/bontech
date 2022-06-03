import axios from "axios";
export const getApi = (value) => {

        return (dispatch) => {

            const key = "AIzaSyC4m3QLll8x-tPz1yzyLdy5tJhbgMec9MY";
            axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}`)
                .then(response => {
                    const val = response.data;
                    
                    dispatch({
                        type: "APIREQUEST",
                        payload: val
                    })
                })
                .catch(error => {
                    console.log(error)
                })
    
        }
    }

export const getInput = (value) => {
    return {
        type: "PASSVALUE",
        payload: value
    }
}
