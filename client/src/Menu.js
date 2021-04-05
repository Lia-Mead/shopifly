import { NavLink } from "react-router-dom";

export default function Menu({ toggleBurgerMenu }) {
    return (
        <div className="overlay">
            <nav className="menu-con slide">
                <div className="nav-con">
                    <NavLink
                        style={{ textDecoration: "underline" }}
                        className="nav-icon"
                        activeClassName="active-b"
                        onClick={toggleBurgerMenu}
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className="nav-icon"
                        activeClassName="active-b"
                        onClick={toggleBurgerMenu}
                        to="/account"
                    >
                        Packages
                    </NavLink>

                    <NavLink
                        className="nav-icon"
                        activeClassName="active-b"
                        onClick={toggleBurgerMenu}
                        to="/my-posts"
                    >
                        My Account
                    </NavLink>

                    <NavLink
                        className="nav-icon"
                        activeClassName="active-b"
                        onClick={toggleBurgerMenu}
                        to="/venues"
                    >
                        My wish list
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}
