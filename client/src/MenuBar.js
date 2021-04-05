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
                    <NavLink to="/chat" activeClassName="active">
                        Packages
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/show-my-friends" activeClassName="active">
                        My Account
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/find-users" activeClassName="active">
                        My wish list
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
