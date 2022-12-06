import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

import "./AllPosts.scss";

export default function AllPosts() {
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                /// * all of type: post
                `*[_type == "post"]{  
                    title,
                    subtext,
                    slug,
                    video,
                    mainImage{
                    asset->{
                    _id,
                    url
                    }
                },
                    
    }`
            )
            .then((data) => setAllPosts(data))
            .catch(console.error);
    }, []);

    return (
        <div className="all-posts-container">
            <h2>All posts</h2>
            <div className="all-posts-container">
                {allPostsData &&
                    allPostsData.map((post, index) => (
                        <Link
                            to={"/" + post.slug.current}
                            key={post.slug.current}
                        >
                            <span className="post-container" key={index}>
                                <img src={post.mainImage?.asset.url} alt="" />
                                {post.video && (
                                    <iframe
                                        src={post.video}
                                        width="720"
                                        height="480"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title="video"
                                    />
                                )}
                                <h2>{post.title}</h2>
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
