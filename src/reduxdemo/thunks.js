import axios from "axios"

export function getCartThunk(dispatch){
    axios({
        url:process.env.REACT_APP_APIURL+"/cakecart",
        method:"get",
        headers:{
            Authorization:localStorage.token
        }
    }).then((response)=>{
        dispatch({
            type:"CART_ITEMS_SUCCESS",
            payload:response.data.data
        })
    })
}