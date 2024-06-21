import { Link, Outlet } from "react-router-dom";

function NewAdmin(){
    return (
        <div className="row">
            <h1>Admin Panel</h1>
            <div className="col-4">
                <div>
                    <Link to="/admin/adduser">Add User</Link>
                </div>
                <div>
                    <Link to="/admin/userlist">User List</Link>
                </div>

            </div>
            <div className="col-8">
                <Outlet />
            </div>
        </div>
    )
}

export default NewAdmin