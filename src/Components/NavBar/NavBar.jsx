import "./NavBar.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const linkStyle = { textDecoration: "none", color: "whitesmoke" };

    return (
        <div className="navbar">
            <Link to="/" classname="navbar__link navbar__home" style={linkStyle}>
                dsplaced.
            </Link>
        </div>
    );
};

export default NavBar;
