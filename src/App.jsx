import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllPosts from "./Components/AllPosts/AllPosts.jsx";
import SinglePost from "./Components/SinglePost/SinglePost.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Terrain from "./Components/Terrain/Terrain.jsx";

import MyThree from "./Components/THREE/MyThree.jsx";

import projects from "./data/projects";
import Info from "./Components/Info/Info";
import GridPosts from "./Components/GridPosts/GridPosts";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// 'use-strict';

function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBsD_KJrmwHq7uxENS02Z9tZ7wrFPbiI6s",
    authDomain: "dsplaced-8fe0b.firebaseapp.com",
    projectId: "dsplaced-8fe0b",
    storageBucket: "dsplaced-8fe0b.appspot.com",
    messagingSenderId: "562034657622",
    appId: "1:562034657622:web:50707b53127b51ba8a2ef7",
    measurementId: "G-XSRXN06ZEG",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //const [scPostsData, setScPosts] = useState(null);

  const scPostsData = projects;
  const [offset, setOffset] = useState(0);
  const [bgStyle, setBgStyle] = useState({ opacity: 1 });
  const [invertBgStyle, setInvertBgStyle] = useState({ opacity: 0 });
  const [linkColour, setLinkColour] = useState(0xff0000);
  const linkColContext = createContext();

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  // useEffect(() => {
  //     const onScroll = () => {
  //         setOffset(window.pageYOffset);
  //     };
  //     // clean up code
  //     window.removeEventListener("scroll", onScroll);
  //     window.addEventListener("scroll", onScroll, { passive: true });
  //     return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    setBgStyle({
      opacity: 1 - (offset - 1) / (window.innerHeight * 0.5 - 1),
    });
    setInvertBgStyle({
      left: (-offset * 220) / (window.innerHeight * 0.5 - 1),
    });
  }, [offset]);

  const handleSetLinkColour = (input) => {
    setLinkColour(input == "dark" ? 0x0c1014 : 0xffffff);
  };

  return (
    <BrowserRouter>
      <div className="site">
        <linkColContext.Provider value={linkColour}>
          <NavBar
            key={new Date()}
            invertBgStyle={invertBgStyle}
            setInvertBgStyle={setInvertBgStyle}
            linkCol={linkColour}
          />
        </linkColContext.Provider>
        <Routes>
          <Route
            element={
              <Home
                handleSetLinkColour={(linkColour) =>
                  handleSetLinkColour(linkColour)
                }
                getRandomInt={getRandomInt}
                scPostsData={scPostsData}
                bgStyle={bgStyle}
              />
            }
            path="/"
            exact
          />
          <Route
            element={<GridPosts postsData={scPostsData} />}
            path="/gridprojects"
            exact
          />
          <Route
            element={<AllPosts postsData={scPostsData} />}
            path="/projects"
            exact
          />
          <Route element={<SinglePost />} path="/:slug" exact />
          <Route element={<Info />} path="/info" exact />
          <Route element={<Shop />} path="/shop" exact />
          <Route element={<Terrain />} path="/terrain" exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
