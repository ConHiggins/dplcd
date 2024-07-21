import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SinglePost.scss";

const SinglePost = ({ post, parentClass }) => {
    
        const mediaType = post.mainImage ? "post__image" : "post__vid";
        const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

        const imageStackToHTML = (stack) => {
            let result = [];
            stack.forEach(img => {
                result.push(<img className={`post__stackImage ${mediaType} ${mediaType}${mediaDimensions}}`} src={img} alt="" />)
            })
            return result;
        }        
        const [stack, setStack] = useState([]);
        useEffect(() => {
            if(post.imageStack) {
                const stackPile = imageStackToHTML(post.imageStack)
                setStack(stackPile);
            }
        }, [])

        

        

    return (
            <div className={`post ${parentClass}`}>
                <Link className="post__link" to="#" /*" + post.slug.current}*/ key={post.slug.current}></Link>

                {post.videoURL && (
                    <iframe
                        className= {`${mediaType} ${mediaType}${mediaDimensions}`}
                        
                        src={post.videoURL}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
                {post.video && <video className= {`${mediaType} ${mediaType}${mediaDimensions}`} type="video/mp4" controls allow="autoplay">
                                    <source src={`${post.video}#t=0.1`} />
                                </video>}
                {post.mainImage && <img className={`${mediaType} ${mediaType}${mediaDimensions}`} src={post.mainImage} alt="" />}
                {post.imageStack && <div className="post__stack">
                        {stack}
                    </div>
                }
                {post.client && <fieldset className="post__fieldset">
                                    <legend className="post__client">{post.client.toUpperCase()}</legend>
                                    {post.body && <div className="post__body">{post.body}</div>}
                                </fieldset>
                }

                
                {/* {post.subtext && (
                    <h2 className="post__subtext">
                        <em>{post.subtext}</em>
                    </h2>
                )}

                {post.title && <h2 className="post__title">{post.title}</h2>} */}
                
            </div>
    );
};

export default SinglePost;
