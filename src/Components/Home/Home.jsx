import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Loading from "../Loading/Loading.jsx";
import SinglePost from "../SinglePost/SinglePost.jsx";
import "./Home.scss";



const Home = ({ scPostsData, bgStyle}) => {
    const splashContentArray = [
        "dsplaced.",
        "dsplaced. is a multidisciplinary creative practice producing work that spans creative-direction, filmmaking, photography, music production, sound design, consulting and more.",
    ];

    const [displayLoading, setDisplayLoading] = useState(false);
    const [splashContentIndex, setSplashContentIndex] = useState(0);
    const [splashContentClass, setSplashContentClass] = useState("home__splash-content inactive");
    
    const [width, setWidth] = useState(window.innerWidth);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    useEffect(() => {
        const mainTimeout = setTimeout(() => {
            setDisplayLoading(false);
        }, 2000);
    });

    useEffect(() => {
        let contentTimeout;
        return () => {
            clearTimeout(contentTimeout);
            contentTimeout = setTimeout(() => {
                if (splashContentIndex !== 0) {
                    handleUpdateContent();
                }
            }, 7000);
        };
    }, [splashContentIndex]);

    const handleUpdateContent = () => {
        splashContentClass.includes("inactive")
            ? setSplashContentClass("home__splash-content active")
            : setSplashContentClass("home__splash-content inactive");
        splashContentIndex >= splashContentArray.length - 1 ? setSplashContentIndex(0) : setSplashContentIndex(splashContentIndex + 1);
    };

    const handleUpdateBG = () => {
    }

    return (
        <div className="home">
            <div className="home__splash" >
                {displayLoading ? (
                    <Loading display={displayLoading} />
                ) : (
                    <div className={splashContentClass}>
                        <p>{splashContentArray[splashContentIndex]}</p>
                    </div>
                )}
            </div>
            <div className="info__desc">
                <p className="info__desc_p">Creative practice focused on delivering ideas.</p>
            </div>
            {/* {scPostsData && (
                <div className="post-container home__post-container">
                    <SinglePost parentClass={"post-snap"} post={scPostsData[0]} />
                </div>
            )} */}
        </div>
    );
};

export default Home;
