import "./folioPost.scss";

const FolioPost = ({ post }) => {
    const mediaType = post.mainImage ? "post__image" : "post__vid";
    const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

    const stacks = post.imageStack ? [post.imageStack[0], post.imageStack[1], post.imageStack[2], post.imageStack[3]] : "";

    return (
        <div className="folio-post">
            {post.mainImage && <img className={`${mediaType} ${mediaType}${mediaDimensions}`} src={post.mainImage} alt="" />}
            {post.imageStack && (
                <>
                    <img className={`folio_stack ${mediaType} ${mediaType}${mediaDimensions}}`} src={stacks[0]} alt="" />
                    <img className={`folio_stack ${mediaType} ${mediaType}${mediaDimensions}}`} src={stacks[1]} alt="" />
                </>
            )}
            {post.videoURL && (
                <iframe
                    className={`${mediaType} ${mediaType}${mediaDimensions}`}
                    src={post.videoURL}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
            {post.video && (
                <video className={`${mediaType} ${mediaType}${mediaDimensions}`} type="video/mp4" controls allow="autoplay">
                    <source src={`${post.video}#t=0.1`} />
                </video>
            )}
        </div>
    );
};

export default FolioPost;
