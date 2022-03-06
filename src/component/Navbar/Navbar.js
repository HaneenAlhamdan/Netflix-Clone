import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
    return (
        <>
            
            <header>
                <br />
                <h1>NETFLIX CLONE</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/">Page</Link>
                    <Link to="/">About </Link>
                </nav>
            </header>
        </>

    )
}
export default Navbar;