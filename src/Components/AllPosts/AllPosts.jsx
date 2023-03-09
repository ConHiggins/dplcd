import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import ProjectDropper from "../ProjectDropper/ProjectDropper.jsx";
import SinglePost from "../SinglePost/SinglePost.jsx";

import "./AllPosts.scss";

export default function AllPosts({ postsData }) {
    return (
        <div className="all-posts-container">
            {postsData && (
                <div className="post-container">
                    {postsData.reverse().map((post, index) => (
                        <ProjectDropper post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}
