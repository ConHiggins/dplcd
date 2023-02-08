import "./NavBar.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({}) => {
    const pages = [
        { label: "projects", to: "/all-posts", changeTo: 1 },
        { label: "home", to: "/", changeTo: 0 },
    ];
    const [buttonContent, setButtonContent] = useState(pages[0]);

    const handleContentChange = () => {
        setButtonContent(pages[buttonContent.changeTo]);
    };

    return (
        <div className="navbar">
            <Link to={buttonContent.to} className="navbar__link navbar__home" onClick={handleContentChange}>
                {buttonContent.label}
            </Link>
        </div>
    );
};

export default NavBar;
