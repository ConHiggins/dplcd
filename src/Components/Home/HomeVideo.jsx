import { useEffect, useRef } from "react";
import "./Home.scss";

const HomeVideo = ({ post, playVid, videoStyle }) => {
  //const mediaType = post.mainImage ? "post__image" : "post__vid";
  //const mediaDimensions = post.isPortrait ? `-portrait` : `-landscape`;

  const stacks = post.imageStack
    ? [
        post.imageStack[0],
        post.imageStack[1],
        post.imageStack[2],
        post.imageStack[3],
      ]
    : "";

  const videoRef = useRef();

  useEffect(() => {
    if (post.video && videoRef.play) {
      videoRef.play();
    }
  }, [playVid]);

  return (
    <div className="folio-post">
      {post.video && (
        <video
          style={videoStyle}
          ref={videoRef}
          className={`folio-video`}
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
      {post.videoURL && (
        <iframe
          className={`folio-vid`}
          src={post.videoURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default HomeVideo;
