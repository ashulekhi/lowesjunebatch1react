import { Link, Outlet } from "react-router-dom";

export default function Checkout() {

    return (

        <div className="container mt-5">

            <div className="row">

                <div className="col-md-4">

                    <div className="list-group">

                        <Link to='/checkout/address' className="list-group-item list-group-item-action">Address</Link>

                        <Link to='/checkout/payment' className="list-group-item list-group-item-action">Payment</Link>

                        <Link to='/checkout/summary' className="list-group-item list-group-item-action">Checkout Summary</Link>

                    </div>

                </div>

                <div className="col-md-8">

                    <div className="card">

                        <div className="card-body">

                            <Outlet />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}