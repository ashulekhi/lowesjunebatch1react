import { useState } from "react"
import Cakelist from "./Cakelist"

function AddCake() {
    var cake = {}
    var [cakes, setCakes] = useState([])
    function handleName(e) { cake.name=e.target.value}
    function handlePrice(e) { cake.price=e.target.value}
    function handleImage(e) { cake.image=e.target.value}

    function addCakes(){
        cakes.push({...cake})
        console.log("cakes ready" , cakes)
        // update it on the ui 
         setCakes([...cakes])
    }
  
    return (
        <div>
            <div>
                <input onChange={handleName} placeholder="Cake Name"></input>
            </div>
            <div>
                <input onChange={handlePrice} placeholder="Cake Price"></input>
            </div>
            <div>
                <input onChange={handleImage} placeholder="Cake Image"></input>
            </div>
            <button onClick={addCakes}>Add Cake</button>

            <Cakelist cakes={cakes} />
        </div>

    )
}

export default AddCake