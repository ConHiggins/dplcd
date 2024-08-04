import { useEffect, useRef } from "react";
import "./folioPost.scss";

const FolioPost = ({ post, playVid }) => {
    const mediaType = post.mainImage ? "post__image" : "post__vid";
    const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

    const stacks = post.imageStack ? [post.imageStack[0], post.imageStack[1], post.imageStack[2], post.imageStack[3]] : "";

    const videoRef = useRef();

    useEffect(() => {
        if (post.video && videoRef.play) {
            videoRef.play();
        }
    }, [playVid]);

    return (
        <div className="folio-post">
            {post.mainImage && <img className={`folio_img`} src={post.mainImage} alt="" />}
            {post.imageStack && (
                <>
                    <img className={`folio_stack ${mediaType} ${mediaType}${mediaDimensions}}`} src={stacks[0]} alt="" />
                    <img className={`folio_stack ${mediaType} ${mediaType}${mediaDimensions}}`} src={stacks[1]} alt="" />
                </>
            )}
            {post.videoURL && (
                <iframe
                    className={`folio_vid`}
                    src={post.videoURL}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
            {post.video && (
                <video
                    ref={videoRef}
                    className={`folio_img`}
                    type="video/mp4"
                    autoPlay={true}
                    id="video"
                    crossOrigin="true"
                    playsInline
                    muted
                    webkit-playsinline="true"
                    loop
                >
                    <source src={`${post.video}`} />
                </video>
            )}
        </div>
    );
};

export default FolioPost;
