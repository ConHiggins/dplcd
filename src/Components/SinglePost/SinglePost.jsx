import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./SinglePost.scss";

const SinglePost = ({ post, parentClass }) => {
    
        const mediaType = post.mainImage ? "post__image" : "post__vid";
        const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;
        

    return (
        <div>
            <div className={`post ${parentClass}`}>
                <Link className="post__link" to="#" /*" + post.slug.current}*/ key={post.slug.current}></Link>

                {post.video && (
                    <iframe
                        className= {`${mediaType} ${mediaType}${mediaDimensions}`}
                        
                        src={post.video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
                {post.mainImage && <img className={`${mediaType} ${mediaType}${mediaDimensions}`} src={post.mainImage} alt="" />}
                {post.client && <h1 className="post__client">{post.client}</h1>}
                {post.subtext && (
                    <h2 className="post__subtext">
                        <em>{post.subtext}</em>
                    </h2>
                )}

                {post.title && <h2 className="post__title">{post.title}</h2>}
                {post.body && <div className="post__body">{post.body}</div>}
            </div>
        </div>
    );
};

export default SinglePost;
