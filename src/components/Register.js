import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Register(){
    var user = {}
    var [isloading,setisLoading] = useState(false)
    function handleEmail(e){
        user.email = e.target.value
    }
    function handleName(e){
        user.name = e.target.value
    }
    function handlePassword(e){
        user.password = e.target.value
    }

    function registerUser(){
        setisLoading(true)
       // api call 
       axios({
        method:"post",
        url:process.env.REACT_APP_APIURL+"/register",
        data:user
       }).then((response)=>{
        setisLoading(false)

            console.log("response from api" , response.data)
       } , (error)=>{
        setisLoading(false)
        console.log("Error from api is" , error)
       })
    }
    return (
        <div className="container mt-5">
        <section class=" text-center text-lg-start">
            <div class="card mb-3">
                <div class="row g-0 d-flex align-items-center">
                    <div class="col-lg-4 d-none d-lg-flex">
                        <img src="cakeshop.jpeg" alt="Trendy Pants and Shoes"
                            class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                    </div>
                    <div class="col-lg-8">
                        <div class="card-body py-5 px-md-5">
                            <h1>Create Account</h1>
                            <form>
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <input onChange={handleEmail} type="email" id="form2Example1" class="form-control" />
                                    <label class="form-label" for="form2Example1">Email address</label>
                                </div>
                                <div data-mdb-input-init class="form-outline mb-4">
                                    <input onChange={handleName}   id="" class="form-control" />
                                    <label class="form-label" for="form2Example1"> Name</label>
                                </div>

                                <div data-mdb-input-init class="form-outline mb-4">
                                    <input onChange={handlePassword}  type="password" id="form2Example2" class="form-control" />
                                    <label class="form-label" for="form2Example2">Password</label>
                                </div>

                                <div class="row mb-4">
                                    

                                    <div class="col">
                                        <Link to="/login">Already Registered? Login</Link>
                                    </div>
                                </div>

                                <button onClick={registerUser} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Create Account</button>
                               {false &&  <button disabled  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Creating Account Please Wait...</button>}

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Register