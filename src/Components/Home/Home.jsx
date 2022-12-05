import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import ShuffleText from "react-shuffle-text";
import "./Home.scss";

const Home = ({ getRandomInt }) => {
    const [scPostsData, setScPosts] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                /// * all of type:
                `*[_type == "showcase"]{  
        title,
        subtext,
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
            <div className="home__splash">
                <ShuffleText
                    className="home__title"
                    content={"displaced"}
                ></ShuffleText>
            </div>
            <div className="home__showcase-post">
                {scPostsData &&
                    scPostsData.map((post, index) => (
                        <Link
                            to={"/" + post.slug.current}
                            key={post.slug.current}
                        >
                            <span key={index}>
                                <img src={post.mainImage.asset.url} alt="" />
                                <span>
                                    <h2>{post.title}</h2>
                                </span>
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Home;
