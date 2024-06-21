import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCartThunk } from "../reduxdemo/thunks"

function Cart(){
    var cartitems = useSelector(state=>state.ReducerSecond.cartitems)
    var dispatch =  useDispatch()
    var totalPrice = 0

    useEffect(()=>{
        dispatch(getCartThunk)
    },[])
    
    function removeFromCart(){

    }
    console.log("...................." , cartitems)
    return (
        <div className="container">
            <h1>Cart Items </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems?.map((each, index) => {
                        totalPrice = totalPrice+each.price*each.quantity
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{each.name}</td>
                                <td><img src={each.image} style={{ width: "5rem", height: "4rem" }}></img></td>
                                <td>{each.price}</td>
                                <td><button className="btn btn-secondary">+</button>{each.quantity}<button className="btn btn-secondary">-</button></td>
                                <td><button onClick={removeFromCart.bind(this,each.cakeid , index)} className="btn btn-danger">X</button></td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
            <div>
                <h3>Total Price : {totalPrice}</h3>
            <Link to="/checkout"><button style={{float:"right"}} className="btn btn-warning mt-3">Checkout</button></Link>
            </div>
        </div>
    )
}
export default Cart