import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

function Navbar({ userCount }) {
  var navigate = useNavigate()
  var isloggedin = useSelector(state => state.Reducer.isloggedin)
  var [searchText, setSearchText] = useState()
  function searchCakes() {
    navigate("/search?q=" + searchText)
  }

  function handleSearchText(e) {
    setSearchText(e.target.value)
  }

  function logout() {
    localStorage.clear()
    window.location.href = "/"
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Lowe's Cake Gallery</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <form class="d-flex" role="search">
              <input onChange={handleSearchText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button onClick={searchCakes} class="btn btn-outline-success" type="button">Search</button>
            </form>


          </ul>
          <div class="d-flex" role="search">
            {isloggedin == false && <Link to="/login"><button class="btn btn-primary" type="submit">Login</button></Link>}
           
            {isloggedin == true && <div class="btn-group">
            <img src="usericon.jpeg" className="image-fluid" style={{height:"3rem" , width:"3rem" , borderRadius:"1%"}} />
              <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {localStorage.name}
              </button>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/myorders">My Orders</Link></li>
                <li><Link onClick={logout} class="dropdown-item">Logout</Link></li>
              </ul>
            </div>
            }
            {isloggedin == true && <Link to="/cart"><button class="btn btn-warning" type="button">Cart</button></Link>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar