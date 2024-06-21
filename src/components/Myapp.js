import { BrowserRouter , Routes , Route } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import Register from "./Register"
import Forgot from "./Forgot"
import Pagenotfound from "./Pagenotfound"
import Navbar from "./Navbar"
import Cakedetails from "./Cakedetails"
import Search from "./Search"
import Userlist from "./Userlist"
import Adduser from "./AddUser"
import Cart from "./Cart"
import Checkout from "./Checkout"
import Address from "./Address"
import Payment from "./Payment"
import Summary from "./Summary"
import Previousorders from "./Previousorders"
import { useSelector } from "react-redux"
import React from "react"
import Loader from "./Loader.js"

var NewAdmin = React.lazy(()=>import("./NewAdmin.js"))

function Myapp(){
    var isloggedin = useSelector(state=>state.Reducer.isloggedin)
    return (
        <div>

           <BrowserRouter>
           <Navbar />
           <Routes>
            <Route path="/" element={<Home></Home>} />
            {true && <Route path="/login" element={<Login></Login>} />}
            <Route path="/search" element={<Search />} />
            <Route path="/register" element={<Register></Register>} />
            {/* <Route path="/admin" element={<Admin></Admin>} /> */}
            <Route path="/forgot" element={<Forgot></Forgot>} />
            {isloggedin && <Route path="/cart" element={<Cart />} /> }
            <Route path="/checkout" element={<Checkout />} >
                <Route path="" element={<Address />} />
                <Route path="address" element={<Address />} />
                <Route path="payment" element={<Payment />} />
                <Route path="summary" element={<Summary />} />
            </Route>
            <Route path="/details/:cakeid" element={<Cakedetails />} />
            <Route path="/*" element={<Pagenotfound></Pagenotfound>} />
            <Route path="/myorders" element={<Previousorders></Previousorders>} />
            <Route path="/admin" element={<React.Suspense fallback={<Loader />}> <NewAdmin /></React.Suspense>}>
                <Route path="" element={<Adduser />} />
                <Route path="adduser" element={<Adduser />} />
                <Route path="userlist" element={<Userlist />} />
            </Route>



           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default Myapp