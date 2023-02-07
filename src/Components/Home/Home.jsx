import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Loading from "../Loading/Loading.jsx";
import "./Home.scss";
//import videoBG from "../../Assets/Teaser_Breakdown_30seconds_1080p.mp4";

const Home = ({ scPostsData, bgStyle }) => {
    const splashContentArray = [
        "dsplaced.",
        "dsplaced. is a multi-disciplinary creative practice producing work that spans art-direction, film, photography, music, design, fashion and more.",
    ];

    const [displayLoading, setDisplayLoading] = useState(true);
    const [splashContentIndex, setSplashContentIndex] = useState(0);

    useEffect(() => {
        const mainTimeout = setTimeout(() => {
            setDisplayLoading(false);
        }, 2000);
    });

    useEffect(() => {
        const contentTimeout = setTimeout(() => {});
    });

    const handleUpdateContent = () => {
        console.log(document.querySelector("#home__splash-content"));
        const elementToChange = document.querySelector("#home__splash-content");
        elementToChange.classList.contains("active") ? elementToChange.classList.remove("active") : elementToChange.classList.add("active");
        splashContentIndex >= splashContentArray.length - 1 ? setSplashContentIndex(0) : setSplashContentIndex(splashContentIndex + 1);
    };

    /* <video
                        className="home__splash__bg-vid"
                        role="video"
                        src={videoBG}
                        preload="metadata"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ opacity: videoLoaded }}
                        onLoadedMetadata={() => {
                            if (videoLoaded !== 1) setVideoLoaded(1);
                        }}
                        onCanPlay={() => {
                            if (videoLoaded !== 1) setVideoLoaded(1);
                        }}
                    /> */

    return (
        <div className="home">
            <div className="home__splash" style={bgStyle}>
                {displayLoading ? (
                    <Loading display={displayLoading} />
                ) : (
                    <>
                        <div className="centre-buffer" />
                        <div className="home__splash-content" onClick={handleUpdateContent}>
                            <p key={+new Date()} id="home__splash-content">
                                {splashContentArray[splashContentIndex]}
                            </p>
                        </div>
                        <Button
                            className={"button button__primary home__splash__projects-button"}
                            content="view projects"
                            link="/all-posts"
                            onClick={() => {
                                console.log("here");
                            }}
                        />
                    </>
                )}
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
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
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
