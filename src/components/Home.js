import { useState } from "react"
import AddCake from "./Addcake"
import Admin from "./Admin"
import Cake from "./Cake"
import Forgot from "./Forgot"
import Login from "./Login"
import Meeting from "./Meeting"
import Navbar from "./Navbar"
import Register from "./Register"
import User from "./User"
import Cakelist from "./Cakelist"
import Employee from "./Employee"
import Carousel from "./Carousel"

function Home() {
    return (
        <div>
            <Carousel />
            <Cakelist />

        </div>

    )
}

export default Home

// ("user1")=>{}
// ("user2")=>{}
// ("user3")=>{}