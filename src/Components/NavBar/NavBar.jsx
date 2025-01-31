import "./NavBar.scss";
import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ invertBgStyle, setInvertBgStyle, linkCol }) => {
    const pages = [
        { label: "PROJECTS", current: "/", to: "/projects", changeTo: 1 },
        { label: "HOME", current: "/projects", to: "/", changeTo: 0 },
    ];

    const location = useLocation();
    const [buttonContent, setButtonContent] = useState(pages[0]);
    const [col, setCol] = useState({color: "#0c1014"});

    const handleContentChange = () => {
        setCol(buttonContent.changeTo == 1 ? {color: "#ffffff"} : {color: "#0c1014"});
        setButtonContent(pages[buttonContent.changeTo]);
    };

    useEffect(() => {
        if ( buttonContent.current !== location.pathname) {
            handleContentChange();
        }
    }, [location]);

    return (
        <>
            {buttonContent.changeTo === 0 && (
                <div className="navbar">
                    <Link to={"/"} style={col} className="global_link navbar__title">
                        dsplaced.
                    </Link>
                    <Link
                        to={buttonContent.to}
                        style={col}
                        className="global_link navbar__link navbar__home"
                        onClick={handleContentChange}
                    >
                        {buttonContent.label}
                    </Link>
                </div>
            )}
            {buttonContent.changeTo === 1 && (
                <div className="global_link navbar" style={invertBgStyle}>
                    <Link to={"/"} style={col} className="global_link navbar__title">
                        dsplaced.
                    </Link>

                    <Link
                        to={buttonContent.to}
                        style={col}
                        className="global_link navbar__link navbar__home"
                        onClick={handleContentChange}
                    >
                        {buttonContent.label}
                    </Link>
                </div>
            )}
        </>
    );
};

export default NavBar;
