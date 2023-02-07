import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";

import "./AllPosts.scss";

export default function AllPosts({ postsData }) {
    return (
        <div className="all-posts-container">
            <h2 className="all-posts__title">projects.</h2>
            <div className="all-posts-container">
                {postsData && (
                    <div className="post">
                        {postsData.map((post, index) => (
                            <>
                                <Link className="post__link" to="#" /*" + post.slug.current}*/ key={post.slug.current}></Link>
                                {post.mainImage && (
                                    <div
                                        className="post-bg"
                                        style={{
                                            backgroundImage: `url(${post.mainImage?.asset.url})`,
                                        }}
                                    ></div>
                                )}
                                {post.video && (
                                    <iframe
                                        className="post__vid"
                                        src={post.video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                )}
                                <h1 className="post__client">{post.client}</h1>
                                <h2 className="post__subtext">
                                    <em>{post.subtext}</em>
                                </h2>
                                {post.mainImage && <img className="post__image" src={post.mainImage?.asset.url} alt="" />}
                                <h2 className="post__title">{post.title}</h2>

                                <div className="post__body">
                                    {post.body[0].children.map((item) => {
                                        ///URL's are stored in .markDefs
                                        ///If a markDef._key exists that matches the item's key
                                        const markDefMatchingIndex = post.body[0].markDefs.findIndex((x) => x._key);
                                        const itemMark = item.marks[0] !== "undefined" ? item.marks[0] : "";

                                        return markDefMatchingIndex !== "undefined" &&
                                            post.body[0].markDefs[markDefMatchingIndex]._key === item.marks[0] ? ( ///Match the URL to the text
                                            <a href={post.body[0].markDefs[markDefMatchingIndex].href}>{Object.values(item.text)}</a>
                                        ) : (
                                            Object.values(item.text)
                                        );
                                    })}
                                </div>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
