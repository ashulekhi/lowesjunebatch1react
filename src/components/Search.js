import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake"
import axios from "axios"

function Search(){
    var [query,setQuery] = useSearchParams()
    var [cakes,setCakes] = useState()
    var searchtext = query.get("q")

    useEffect(()=>{
        axios({
            url: process.env.REACT_APP_APIURL +"/searchcakes?q="+searchtext,
            method:"get"
         }).then((response)=>{
            setCakes(response.data.data)
    
         } , (error)=>{
            
         })
    },[searchtext])
    return (
        <div>
            <h1>Search Results for {searchtext} </h1>
            <div className="row">
            {
                cakes?.map((each)=>{
                    return <Cake data={each} />
                })
            }
        </div>
        </div>
    )
}

export default Search