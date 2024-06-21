import { useContext } from "react"
import { GoldContext } from "../App"
import { Link } from "react-router-dom"

function Cake(props){
    var gold = useContext(GoldContext)
    if(props.data.eggless){
        var Label = <label>Eggless</label>
    }
    else{
        var Label  = null
    }
    return (
        <div className="card m-3" style={{width:"18rem"}}>
            <Link to={"/details/"+props.data.cakeid}><img style={{height:"15rem" , width:"18rem"}} src={props.data.image}></img></Link>
            <label>{props.data.name}</label>
            <label>{props.data.price}</label>
            {Label}
        </div>
    )
}
export default Cake