import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./Components/AllPosts/AllPosts.jsx";
import SinglePost from "./Components/SinglePost/SinglePost.jsx";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route element={<AllPosts />} path="/" exact />
                    <Route element={<SinglePost />} path="/:slug" exact />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
