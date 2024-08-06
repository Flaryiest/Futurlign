import "/src/style/navbar.css"
import {useState, useEffect} from "react"

function NavBar() {
    return (
    <header className="navBar">
        <div className="logo">Futurlign</div>
        <ul className="navLinks">
            <li>Info</li>
            <li>Events</li>
            <li>Network</li>
        </ul>
        <div>
            <a>Join Us</a>
        </div>
    </header>
    )
}

export default NavBar