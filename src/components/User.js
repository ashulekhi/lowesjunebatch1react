function User({name , location , bonus}){
    return (
        <div>
            <img src="usericon.jpeg"></img>
            <label>{name}</label>
            <label>{location}</label><br></br>
            {bonus && <label>Bonus {bonus}</label>}
       
        </div>
    )
}

export default User