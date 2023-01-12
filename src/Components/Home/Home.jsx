import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import ShuffleText from "react-shuffle-text";
import "./Home.scss";
import videoBG from "../../Assets/Teaser_Breakdown_30seconds_1080p.mp4";

const Home = ({}) => {
    const [scPostsData, setScPosts] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(0.5);
    const [offset, setOffset] = useState(0);
    const [bgStyle, setBgStyle] = useState({ opacity: 1 });

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.pageYOffset);
        };
        // clean up code
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setBgStyle({
            opacity: 1 - (offset - 1) / (window.innerHeight * 0.5 - 1),
        });
    }, [offset]);

    useEffect(() => {
        sanityClient
            .fetch(
                /// * all of type:
                `*[_type == "post"]{  
        title,
        subtext,
        client,
        body,
        slug,
        video,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
            )
            .then((data) => setScPosts(data))
            .catch(console.error);
    }, []);

    return (
        <div className="home">
            <div className="home__splash" style={bgStyle}>
                <ShuffleText role="title" className="home__title" content={"displaced."} charIncInterval={40}></ShuffleText>

                <video
                    className="home__splash__bg-vid"
                    role="video"
                    src={videoBG}
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ opacity: videoLoaded }}
                    onLoadedData={() => {
                        setVideoLoaded(1);
                    }}
                />
            </div>
            {scPostsData && (
                <div className="home__showcase-post">
                    {scPostsData.map((post, index) => (
                        <>
                            <Link className="home__showcase-post__link" to="#" /*" + post.slug.current}*/ key={post.slug.current}></Link>
                            {post.mainImage && (
                                <div
                                    className="home__showcase-post-bg"
                                    style={{
                                        backgroundImage: `url(${post.mainImage?.asset.url})`,
                                    }}
                                ></div>
                            )}
                            {post.video && (
                                <iframe
                                    className="home__showcase-post__vid"
                                    src={post.video}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            )}
                            <h1 className="home__showcase-post__client">{post.client}</h1>
                            <h2 className="home__showcase-post__subtext">
                                <em>{post.subtext}</em>
                            </h2>
                            {post.mainImage && <img className="home__showcase-post__image" src={post.mainImage?.asset.url} alt="" />}
                            <h2 className="home__showcase-post__title">{post.title}</h2>

                            <div className="home__showcase-post__body">
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
    );
};

export default Home;
