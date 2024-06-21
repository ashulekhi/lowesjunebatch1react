import { useState } from "react"

function Forgot(){
    var email
    var [error,setError] = useState()
    function handleEmail(e){
        email = e.target.value
    }
    function recoverPassword(){
        if(!email){
            setError("Email is Required")
        }
        console.log("Password Reset Email sent to your Email ID!" ,email)
    }
    return (
        <div>
            {error && <label style={{color:"red"}}>{error}</label>}
            <input onChange={handleEmail} placeholder="Email Adress"></input>
            <button onClick={recoverPassword}>Submit</button>
        </div>
    )
}
export default Forgot