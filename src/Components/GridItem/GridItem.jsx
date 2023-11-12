import "./GridItem.scss";
import { Link } from "react-router-dom";

export default function GridItem({post}) {

    const mediaType = post.mainImage ? "grid__image" : "grid__vid";
    const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

    return (
        <div>
            <div className={`grid-item`}>
                <Link className="grid__link" to="#" /*" + post.slug.current}*/ key={post.slug.current}></Link>

                {post.videoURL && (
                    <div className= {`${mediaType} ${mediaType}${mediaDimensions}`}>
                        <iframe
                        
                            
                            src={`${post.videoURL}?controls=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                {post.video && <video className= {`${mediaType} ${mediaType}${mediaDimensions}`} type="video/mp4" controls allow="autoplay" autoPlay={true}>
                                    <source src={`${post.video}#t=0.1`} />
                                </video>}
                {post.mainImage && <img className={`${mediaType} ${mediaType}${mediaDimensions}`} src={post.mainImage} alt="" />}
                {/* {post.client && <h1 className="grid__client">{post.client}</h1>}
                {post.subtext && (
                    <h2 className="grid__subtext">
                        <em>{post.subtext}</em>
                    </h2>
                )}

                {post.title && <h2 className="grid__title">{post.title}</h2>}
                {post.body && <div className="grid__body">{post.body}</div>} */}
            </div>
        </div>
    );
}