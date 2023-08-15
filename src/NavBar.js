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
                <Link to="/little-things-blog">Home</Link>
                <Link to="/little-things-blog/about">About</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;