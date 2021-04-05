import Menu from "./Menu";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header(props) {
    const [mQuery, setMQuery] = useState();
    const [screenSize, setScreenSize] = useState();

    useEffect(() => {
        window.addEventListener("resize", updateSize);
        setScreenSize(window.innerWidth);
    });

    const updateSize = () => {
        let mql = window.matchMedia("(max-width: 1074px)");
        setMQuery(mql.matches);
    };

    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurgerMenu = () => {
        // console.log("toggle open");
        setBurgerOpen(!burgerOpen);
    };

    let src;
    burgerOpen ? (src = "/icons/close.svg") : (src = "/icons/menu.svg");

    return (
        <>
            <header>
                <Link className="logo-link" to="/">
                    <h1>Logo</h1>
                </Link>
                <div className="menu-box">
                    {screenSize < 900 || mQuery ? (
                        <img
                            onClick={toggleBurgerMenu}
                            className="icon"
                            src={src}
                        />
                    ) : (
                        <MenuBar />
                    )}
                </div>
            </header>

            {burgerOpen ? (
                <Menu className="" toggleBurgerMenu={toggleBurgerMenu} />
            ) : null}
        </>
    );
}
