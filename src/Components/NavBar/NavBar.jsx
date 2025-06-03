import "./NavBar.scss";
import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ context }) => {
  const pages = [
    { label: "SHOP", to: "/shop" },
    { label: "INFO", to: "/info" },
    { label: "PROJECTS", to: "/projects" },
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
        <Link to={"/"} className="global_link navbar__title">
          <span>dsplaced.</span>
        </Link>
        {pages.map((page) => {
          return (
            <Link to={page.to} className="global_link navbar__link">
              {page.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
