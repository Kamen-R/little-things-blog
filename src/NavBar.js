import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <header>
                <Link to="/">
                    Life, Love, & Little Things
                </Link>
            </header>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;