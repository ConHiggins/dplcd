import React, { useEffect, useState } from "react";
import ProjectDropper from "../ProjectDropper/ProjectDropper.jsx";

import "./AllPosts.scss";

export default function AllPosts({ postsData }) {
    return (
        <div className="all-posts-container">
            {postsData && (
                <div className="post-container">
                    {postsData
                        .map((post, index) => {
                            if (post.isProjectsPage) return <ProjectDropper post={post} />;
                        })
                        .filter((p) => {
                            return p;
                        })}
                </div>
            )}
        </div>
    );
}
