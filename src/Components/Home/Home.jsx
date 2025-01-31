import React, { useEffect, useState, useRef, createContext, useContext } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Button from "../Button/Button.jsx";
import Loading from "../Loading/Loading.jsx";
import Footer from "../Footer/Footer.jsx";
import SinglePost from "../SinglePost/SinglePost.jsx";
import FolioPost from "../folioPost/folioPost.jsx";
import MyThree from "../THREE/MyThree.jsx";
import "./Home.scss";

const Home = ({ handleSetLinkColour, scPostsData, bgStyle }) => {
    const splashContentArray = [
        "dsplaced.",
        "dsplaced. is a multidisciplinary creative practice producing work that spans creative-direction, filmmaking, photography, music production, sound design, consulting and more.",
    ];

    const [displayLoading, setDisplayLoading] = useState(false);
    // const [splashContentIndex, setSplashContentIndex] = useState(0);
    // const [splashContentClass, setSplashContentClass] = useState("home__splash-content inactive");
    const [folioIndex, setFolioIndex] = useState(0);

    //const [width, setWidth] = useState(window.innerWidth);
    const linkCol = null; // useContext(linkColContext);

    const folioPosts = scPostsData
        .map((p) => {
            if (p.isFolio) return <FolioPost post={p} playVid={displayLoading} />;
        })
        .filter((p) => {
            return p;
        });

    // function handleWindowSizeChange() {
    //     setWidth(window.innerWidth);
    // }
    // useEffect(() => {
    //     window.addEventListener("resize", handleWindowSizeChange);
    //     return () => {
    //         window.removeEventListener("resize", handleWindowSizeChange);
    //     };
    // }, []);

    useEffect(() => {
        const mainTimeout = setTimeout(() => {
            setDisplayLoading(false);
        }, 10000);
    });

    // ------------- GSAP ------------------------

    const handleFolioUpdate = () => {
        setFolioIndex((folioIndex) => (folioIndex >= folioPosts.length - 1 ? 0 : folioIndex + 1));
    };

    const container = useRef();
    let postTween;

    useGSAP(() => {
        postTween = gsap.to(".folio-post", {
            delay: 10,
            duration: 10,
            onComplete: () => handleFolioUpdate(),
        });
    });

    return (
        <>
            <div className="home">
                {/* {displayLoading && <MyThree />} */}
                <div className="info__desc"></div>
            </div>
            {scPostsData && (
                <div
                    className="folio-post-container"
                    ref={container}
                    onClick={() => {
                        handleFolioUpdate();
                        handleSetLinkColour(folioPosts[folioIndex].props.post.linkCol, linkCol);
                    }}
                >
                    {folioPosts[folioIndex]}
                </div>
            )}

            <Footer linkCol={linkCol} />
        </>
    );
};

export default Home;
