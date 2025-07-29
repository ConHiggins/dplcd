import "./NavBar.scss";
import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ context }) => {
  const pages = [
    { label: "Info", to: "/info" },
    { label: "Projects", to: "/projects" },
  ];

  const location = useLocation();
  const navBar = useRef();

  useEffect(() => {
    if (location.pathname === "/projects" && navBar) {
      navBar.current.className = "navbar navbar-projects";
    } else {
      navBar.current.className = "navbar";
    }
  }, [location]);

  return (
    <>
      <div ref={navBar} className="navbar">
        <div className="navbar-left">
          <Link to={"/"} className="global_link navbar__title">
            <span>dsplaced.</span>
          </Link>
        </div>
        <div className="navbar-right">
          {pages.map((page, index) => {
            return (
              <Link
                to={page.to}
                className="global_link navbar__link"
                key={page.label + "_" + index}
              >
                <span>{page.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar;
