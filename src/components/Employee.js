import { useEffect, useState } from "react"

function Employee(){
    var [salary,setSalary] = useState(100000)
    var [designation,setDesignation] = useState("SE")
    useEffect(()=>{
        alert("Bhai Party!!!!")
    },[])
    return (
        <div>
            <h1>I got the job {salary}</h1>
            <h1>I got the Promotion {designation}</h1>
            <button onClick={()=>{setSalary(salary+salary*0.1)}}>Increment</button>
            <button onClick={()=>{setDesignation("Senior"+designation)}}>promotion</button>
        </div>
    )
}

export default Employee

// Get Lost