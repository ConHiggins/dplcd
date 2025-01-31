import React, { useEffect, useState } from "react";
import ProjectDropper from "../ProjectDropper/ProjectDropper.jsx";
import MyThree from "../THREE/MyThree.jsx";

import "./AllPosts.scss";

export default function AllPosts({ postsData }) {

    return (
        <div className="all-posts-container__parent">
            <div className="all-posts-container" style={{zIndex: 0}}>
                {postsData && (
                    <div className="post-container" style={{zIndex: 1}}>
                        <MyThree />
                        {postsData
                            .map((post, index) => {
                                if (post.isProjectsPage) return <ProjectDropper post={post} style={{zIndex: 3}} />;
                            })
                            .filter((p) => {
                                return p;
                            })}
                    </div>
                )}
            </div>
        </div>
    );
}
