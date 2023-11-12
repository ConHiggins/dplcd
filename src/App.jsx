import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import sanityClient from "./client.js";
import Home from "./Components/Home/Home";
import AllPosts from "./Components/AllPosts/AllPosts.jsx";
import SinglePost from "./Components/SinglePost/SinglePost.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer.jsx";

import projects from "./data/projects";
import Info from "./Components/Info/Info";
import GridPosts from "./Components/GridPosts/GridPosts";

// 'use-strict';

function App() {
    //const [scPostsData, setScPosts] = useState(null);

    const scPostsData = projects;
    const [offset, setOffset] = useState(0);
    const [bgStyle, setBgStyle] = useState({ opacity: 1 });
    const [invertBgStyle, setInvertBgStyle] = useState({ opacity: 0 });

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
        };
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setBgStyle({
            opacity: 1 - (offset - 1) / (window.innerHeight * 0.5 - 1),
        });
        setInvertBgStyle({ left: (-offset * 220) / (window.innerHeight * 0.5 - 1) });
    }, [offset]);

    /*useEffect(() => {
        sanityClient
            .fetch(
                /// * all of type:
                `*[_type == "post"]{  
        title,
        subtext,
        client,
        body,
        slug,
        video,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
            )
            .then((data) => setScPosts(data))
            .catch(console.error);
    }, []);*/

    return (
        <BrowserRouter>
            <div className="site">
                <NavBar key={new Date()} invertBgStyle={invertBgStyle} setInvertBgStyle={setInvertBgStyle} />
                <Routes>
                    <Route element={<Home getRandomInt={getRandomInt} scPostsData={scPostsData} bgStyle={bgStyle} />} path="/" exact />
                    <Route element={<GridPosts postsData={scPostsData} />} path="/gridprojects" exact />
                    <Route element={<AllPosts postsData={scPostsData} />} path="/projects" exact />
                    <Route element={<SinglePost />} path="/:slug" exact />
                    <Route element={<Info />} path="/info" exact />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
