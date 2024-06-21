import axios from "axios"

export var middleware = state=>next=>action=>{
  console.log("Every dispatch will go from this line")
  if(action.type=="FETCH_CART"){
    // make api call
    axios({
        url:process.env.REACT_APP_APIURL+"/cakecart",
        method:"get",
        headers:{
            Authorization:localStorage.token
        }
    }).then((response)=>{
        next({
            type:"CART_ITEMS_SUCCESS",
            payload:response.data.data
        })
    })
  }
  else{
    next(action)
  }
}