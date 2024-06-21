import { useState } from "react"

function Admin({setUserCount}) {
    var [user,setUser] =  useState({})
    var [users , setUsers] = useState([])
    function handleEmail(e){
        user.email = e.target.value
        setUser({...user})
    }
    function handleName(e){
        
        setUser({
            ...user,
            name:e.target.value
           
        })

    }
    function handleExperience(e){
        user.experience = e.target.value
        setUser({...user})

    }
    function handleLocation(e){
        user.location = e.target.value
        setUser({...user})

    }
    function handleTechnology(e){
        user.technology = e.target.value
        setUser({...user})

    }
    function editUser(index){
        setUser(users[index])
    }
    function addUser(){
        console.log("User is " , user)
        setUserCount(users.length+1)
        setUsers([...users,user])
        
        setUser({
            email:"",
            location:"",
            name:"",
            technology:"",
            experience:"",
        })
    }
    return (
        <div className="container">
            <div>
                <h1>Admin Panel</h1>
                <div>
                    <label>Email</label>
                    <input value={user.email} onChange={handleEmail} className="form-control"></input>
                </div>
                <div>
                    <label>Name</label>
                    <input value={user.name} onChange={handleName} className="form-control"></input>
                </div>
                <div>
                    <label>Location</label>
                    <input value={user.location} onChange={handleLocation} className="form-control"></input>
                </div>
                <div>
                    <label>Experience</label>
                    <input value={user.experience} onChange={handleExperience} type="number" className="form-control"></input>
                </div>
                <div>
                    <label>Technology</label>
                    <input value={user.technology} onChange={handleTechnology} className="form-control"></input>
                </div>
                <div>
                    <button onClick={addUser} className="btn btn-primary">Add user</button>
                </div>
            </div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
      <th scope="col">Experience</th>
      <th scope="col">Technology</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
   {users.map((each,index)=>{
    return ( <tr>
        <th scope="row">{index+1}</th>
        <td colspan="1"> {each.name}</td>
        <td colspan="1"> {each.email}</td>
        <td colspan="1"> {each.location}</td>
        <td colspan="1"> {each.experience}</td>
        <td colspan="1"> {each.technology}</td>
        <td colspan="1"> <button onClick={editUser.bind(null,index)} className="btn btn-primary">Edit</button></td>
        {/* <td colspan="1"> <button onClick={function(){editUser()}} className="btn btn-primary">Edit</button></td> */}
      </tr>)
   })}
  </tbody>
</table>

        </div>
    )
}

export default Admin