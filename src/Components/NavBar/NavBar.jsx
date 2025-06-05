import "./NavBar.scss";
import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ context }) => {
  const pages = [
    { label: "Shop", to: "/shop" },
    { label: "Info", to: "/info" },
    { label: "Projects", to: "/projects" },
  ];

  const location = useLocation();

  console.log(location);

  // const pages = [
  //     { label: "PROJECTS", current: "/", to: "/projects", changeTo: 1 },
  //     { label: "HOME", current: "/projects", to: "/", changeTo: 0 },
  // ];

  // const location = useLocation();
  // const [buttonContent, setButtonContent] = useState(pages[0]);
  // const [col, setCol] = useState({color: "#0c1014"});

  // const handleContentChange = () => {
  //     setCol(buttonContent.changeTo == 1 ? {color: "#ffffff"} : {color: "#0c1014"});
  //     setButtonContent(pages[buttonContent.changeTo]);
  // };

  // useEffect(() => {
  //     if ( buttonContent.current !== location.pathname) {
  //         handleContentChange();
  //     }
  // }, [location]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to={"/"} className="global_link navbar__title">
            <span>dsplaced.</span>
          </Link>
        </div>
        <div className="navbar-right">
          {pages.map((page) => {
            return (
              <Link to={page.to} className="global_link navbar__link">
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
