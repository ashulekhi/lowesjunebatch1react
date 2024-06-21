export function Reducer(state={
    isloggedin : localStorage.token?true:false
},action){
    switch(action.type){
        case "LOG_IN" :{
            state = {...state}
            state.isloggedin = true
            return state
        }
       

        default : return state 
    }

}

export function ReducerSecond(state={
    isloggedin : localStorage.token?true:false
},action){
    switch(action.type){
        
        case "CART_ITEMS_SUCCESS" :{
            state = {...state}
            state.cartitems = action.payload
            return state
        }

        default : return state 
    }

}