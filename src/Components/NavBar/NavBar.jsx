import "./NavBar.scss";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ invertBgStyle, setInvertBgStyle }) => {
    const pages = [
        { label: "projects", current: "/", to: "/all-posts", changeTo: 1 },
        { label: "home", current: "/all-posts", to: "/", changeTo: 0 },
    ];

    const location = useLocation();
    const [buttonContent, setButtonContent] = useState(pages[0]);

    const handleContentChange = () => {
        setButtonContent(pages[buttonContent.changeTo]);
    };

    useEffect(() => {
        if (buttonContent.current !== location.pathname) {
            handleContentChange();
        }
    }, []);

    return (
        <>
            {buttonContent.changeTo === 0 && (
                <div className="navbar">
                    <Link to={buttonContent.to} className="navbar__link navbar__home" onClick={handleContentChange}>
                        {buttonContent.label}
                    </Link>
                </div>
            )}
            {buttonContent.changeTo === 1 && (
                <div className="navbar" style={invertBgStyle}>
                    <Link to={buttonContent.to} className="navbar__link-snap navbar__home" onClick={handleContentChange}>
                        {buttonContent.label}
                    </Link>
                </div>
            )}
        </>
    );
};

export default NavBar;
