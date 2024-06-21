import { useEffect, useState } from "react"
import Cake from "./Cake"
import axios from "axios"
import Loader from "./Loader"

function Cakelist(){
    var [cakes,setCakes] = useState([])
    useEffect(()=>{
        axios({
            url: process.env.REACT_APP_APIURL +"/allcakes",
            method:"get"
         }).then((response)=>{
            setCakes(response.data.data)
    
         } , (error)=>{
            
         })
    },[])
    if(cakes.length)
    return (
        <div className="row">
            {
                cakes.map((each)=>{
                    return <Cake data={each} />
                })
            }
        </div>
    )
    else{
        return <Loader />
    }
}
export default Cakelist