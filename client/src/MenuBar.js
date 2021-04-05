import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/packages" activeClassName="active">
                        Packages
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/my-account" activeClassName="active">
                        My Account
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/wish-list" activeClassName="active">
                        My wish list
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
