import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import ShuffleText from "react-shuffle-text";
import "./Home.scss";
import videoBG from "../../Assets/Teaser_Breakdown_30seconds_1080p.mp4";

const Home = ({}) => {
    const [scPostsData, setScPosts] = useState(null);
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

    //console.log(bgStyle);

    useEffect(() => {
        sanityClient
            .fetch(
                /// * all of type:
                `*[_type == "post"]{  
        title,
        subtext,
        body,
        slug,
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
            {scPostsData && (
                <>
                    <div className="home__splash" style={bgStyle}>
                        <ShuffleText className="home__title" content={"displaced."} charIncInterval={40}></ShuffleText>
                        <video className="home__bg-vid" src={videoBG} autoPlay loop muted playsInline />
                    </div>

                    <div className="home__showcase-post">
                        {scPostsData.map((post, index) => (
                            <>
                                <div
                                    className="home__showcase-post-bg"
                                    style={{
                                        backgroundImage: `url(${post.mainImage?.asset.url})`,
                                    }}
                                ></div>
                                <Link className="home__showcase-post__link" to={"/" + post.slug.current} key={post.slug.current}>
                                    <span key={index}>
                                        <img className="home__showcase-post__image" src={post.mainImage?.asset.url} alt="" />
                                        <span>
                                            <h1>{post.title}</h1>
                                        </span>
                                    </span>
                                </Link>
                                <h3 className="home__showcase-post__subtext">
                                    <em>{post.subtext}</em>
                                </h3>
                                <div className="home__showcase-post__body">
                                    {post.body[0].children.map((item) => {
                                        ///URL's are stored in .markDefs
                                        ///If a markDef._key exists that matches the item's key
                                        const markDefMatchingIndex = post.body[0].markDefs.findIndex((x) => x._key);

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
                </>
            )}
        </div>
    );
};

export default Home;
