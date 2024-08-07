import "/src/style/navbar.css"
import { Link } from "react-router-dom"
function NavBar() {
    return (
    <header className="navBar">
        <div className="logo">
            <Link to="/">Futurlign</Link>
        </div>
        <ul className="navLinks">
            <li>
                <Link to="/info">Info</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/network">Network</Link>
            </li>
        </ul>
        <div>
            <Link to="/signUp"><span className="animated secondRow">Join Us</span></Link>
        </div>
    </header>
    )
}

export default NavBar