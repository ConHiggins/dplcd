import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllPosts from "./Components/AllPosts/AllPosts.jsx";
import SinglePost from "./Components/SinglePost/SinglePost.jsx";
import NavBar from "./Components/NavBar/NavBar";

function App() {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route element={<Home getRandomInt={getRandomInt} />} path="/" exact />
                    <Route element={<AllPosts />} path="/all-posts" exact />
                    <Route element={<SinglePost />} path="/:slug" exact />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
