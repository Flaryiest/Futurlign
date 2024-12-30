import "/src/style/navbar.css"
import { Link } from "react-router-dom"
function NavBar() {
    return (
    <header className="navBar">
        <div className="logo">
            <Link to="/"><img className="logo-image" src="/assets/futurlign-logo.png"></img></Link>
        </div>
        <ul className="navLinks">
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/network">Information</Link>
            </li>
        </ul>
        <div className="sign-up-button">
            <Link to="/signup" ><span className="animated secondRow">Join Us</span></Link>
        </div>
    </header>
    )
}

export default NavBar