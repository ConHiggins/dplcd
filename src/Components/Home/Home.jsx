//react
import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";
import { Link } from "react-router-dom";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

//three
import MyThree from "../THREE/MyThree.jsx";

//components
import Button from "../Button/Button.jsx";
import Loading from "../Loading/Loading.jsx";
import Footer from "../Footer/Footer.jsx";
import SinglePost from "../SinglePost/SinglePost.jsx";
import FolioPost from "../folioPost/folioPost.jsx";
import HomeVideo from "./HomeVideo.jsx";
import HomeImage from "./HomeImage.jsx";

//css
import "./Home.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

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

  const folioPosts = scPostsData;

  console.log(folioPosts);

  //! REFACTOR THIS - not nice and probably unperformant
  const fractelVideo = scPostsData.filter((p) => {
    return p.slug === "fractel_folio";
  });

  const fractelImages = scPostsData.filter((p) => {
    return p.slug === "fractelXdsplaced";
  });

  const myProteinImages = scPostsData.filter((p) => {
    return p.slug === "myprotein";
  });

  const ajStillness = scPostsData.filter((p) => {
    return p.slug === "aj_folio";
  });

  const ajFolio1 = scPostsData.filter((p) => {
    return p.slug === "aj_folio";
  });

  const ajFolio2 = scPostsData.filter((p) => {
    return p.slug === "aj_folio2";
  });

  const ajFolio3 = scPostsData.filter((p) => {
    return p.slug === "aj_folio3";
  });

  const gloryDays = scPostsData.filter((p) => {
    return p.slug === "glory-days-port";
  });

  const highlineZine = scPostsData.filter((p) => {
    return p.slug === "highline-zine";
  });

  const bopVideo = scPostsData.filter((p) => {
    return p.slug === "bop";
  });

  const fthmlssVideo = scPostsData.filter((p) => {
    return p.slug === "fthmlss_folio";
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

  //   useEffect(() => {
  //     const mainTimeout = setTimeout(() => {
  //       setDisplayLoading(false);
  //     }, 10000);
  //   });

  // ------------- GSAP ------------------------

  const handleFolioUpdate = () => {
    // setFolioIndex((folioIndex) =>
    //   folioIndex >= folioPosts.length - 1 ? 0 : folioIndex + 1
    // );
  };

  const wrapper = useRef();
  const content = useRef();

  //   const scrollTo = () => {
  //     smoother.current.scrollTo(".box-c", true, "center center");
  //   };

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      wrapper.current = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    },
    { scope: wrapper }
  );

  useGSAP(() => {
    //fractal-anims
    gsap.from("#fractel-1", {
      y: 450,
      scrollTrigger: {
        trigger: "#fractel-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
        markers: false,
      },
    });
    gsap.from("#fractel-2", {
      y: 750,
      scrollTrigger: {
        trigger: "#fractel-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
        markers: false,
      },
    });
    gsap.from("#fractel-3", {
      y: 1050,
      scrollTrigger: {
        trigger: "#fractel-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
        markers: false,
      },
    });

    gsap.from("#fractel-images", {
      scrollTrigger: {
        trigger: "#fractel-image-section",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    //my-protein-anims
    gsap.from("#my-protein-1", {
      y: 1050,
      scrollTrigger: {
        trigger: "#my-protein-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#my-protein-2", {
      y: 750,
      scrollTrigger: {
        trigger: "#my-protein-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#my-protein-3", {
      y: 450,
      scrollTrigger: {
        trigger: "#my-protein-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#my-protein-images", {
      scrollTrigger: {
        trigger: "#my-protein-image-section",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    //stillness-anims
    gsap.from("#stillness-video-container", {
      scrollTrigger: {
        trigger: "#stillness-video-container",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    //alan-johnson-anims
    gsap.from("#alan-johnson-1", {
      y: 450,
      scrollTrigger: {
        trigger: "#alan-johnson-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#alan-johnson-2", {
      y: 750,
      scrollTrigger: {
        trigger: "#alan-johnson-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#alan-johnson-3", {
      y: 1050,
      scrollTrigger: {
        trigger: "#alan-johnson-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#alan-johnson-images", {
      scrollTrigger: {
        trigger: "#alan-johnson-image-section",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    //highline-zine-anims
    gsap.from("#highline-zine-1", {
      y: 1050,
      scrollTrigger: {
        trigger: "#highline-zine-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#highline-zine-2", {
      y: 750,
      scrollTrigger: {
        trigger: "#highline-zine-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#highline-zine-3", {
      y: 450,
      scrollTrigger: {
        trigger: "#highline-zine-image-section",
        start: "top bottom",
        end: "+=1080",
        scrub: true,
      },
    });

    gsap.from("#highline-zine-images", {
      scrollTrigger: {
        trigger: "#highline-zine-image-section",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    //placeholder anims
    gsap.from("#bop-placeholder", {
      scrollTrigger: {
        trigger: "#bop-placeholder",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    gsap.from("#aj-placeholder", {
      scrollTrigger: {
        trigger: "#aj-placeholder",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });

    gsap.from("#highline-placeholder", {
      scrollTrigger: {
        trigger: "#highline-placeholder",
        start: "top top",
        end: "+=600",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        <div className="home">
          <div id="fractel-video">
            <div id="fractel-video-container">
              <HomeVideo type="video" post={fractelVideo[0]} playVid={true} />
            </div>
          </div>
          <div className="image-section" id="fractel-image-section">
            <div className="image-container" id="fractel-images">
              <div id="fractel-1">
                <HomeImage
                  image={fractelImages[0].imageStack[0]}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="fractel-2">
                <HomeImage
                  image={fractelImages[0].imageStack[1]}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="fractel-3">
                <HomeImage
                  image={fractelImages[0].imageStack[2]}
                  imageClass="four-by-five-image"
                />
              </div>
            </div>
          </div>
          <div className="image-section" id="my-protein-image-section">
            <div className="image-container" id="my-protein-images">
              <div id="my-protein-1">
                <HomeImage
                  image={myProteinImages[0].imageStack[0]}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="my-protein-2">
                <HomeImage
                  image={myProteinImages[0].imageStack[1]}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="my-protein-3">
                <HomeImage
                  image={myProteinImages[0].imageStack[2]}
                  imageClass="four-by-five-image"
                />
              </div>
            </div>
          </div>
          <div id="stillness-video-container">
            <div id="stillness-video">
              <HomeVideo
                videoStyle={{ height: "100vh" }}
                post={ajStillness[0]}
                playVid={true}
              />
            </div>
          </div>
          <div className="image-section" id="alan-johnson-image-section">
            <div className="image-container" id="alan-johnson-images">
              <div id="alan-johnson-1">
                <HomeImage
                  image={gloryDays[0].imageStack[0]}
                  imageClass="one-by-one-image"
                />
              </div>
              <div id="alan-johnson-2">
                <HomeImage
                  image={ajFolio2[0].mainImage}
                  imageClass="one-by-one-image"
                />
              </div>
              <div id="alan-johnson-3">
                <HomeImage
                  image={gloryDays[0].imageStack[1]}
                  imageClass="one-by-one-image"
                />
              </div>
            </div>
          </div>
          <div className="placeholder-section" id="aj-placeholder">
            <h1>ALAN JOHNSON VIDEO</h1>
          </div>
          {/*//! broken video*/}
          {/* <div id="alan-johnson-video">
            <div id="alan-johnson-video-container">
              <HomeVideo type="video" post={ajFolio1[0].video} playVid={true} />
            </div>
          </div> */}
          <div className="image-section" id="highline-zine-image-section">
            <div className="image-container" id="highline-zine-images">
              <div id="highline-zine-1">
                <HomeImage
                  image={highlineZine[1].imageStack[4]}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="highline-zine-2">
                <HomeImage
                  image={highlineZine[0].mainImage}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="highline-zine-3">
                <HomeImage
                  image={highlineZine[1].imageStack[7]}
                  imageClass="four-by-five-image"
                />
              </div>
            </div>
          </div>
          <div className="placeholder-section" id="bop-placeholder">
            <h1>BOP VIDEO</h1>
          </div>
          <div className="placeholder-section" id="highline-placeholder">
            <h1>COLUMBIA HIGHLINE VIDEO</h1>
          </div>
          {/* //! need video file for BOP as opposed to URL */}
          {/* <div id="bop-video">
            <div id="bop-video-container">
              <HomeVideo type="video" post={bopVideo[0]} playVid={true} />
            </div>
          </div> */}
          <div id="fthmlss-video">
            <div id="fthmlss-video-container">
              <HomeVideo type="video" post={fthmlssVideo[0]} playVid={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="home">
    //     {/* {displayLoading && <MyThree />} */}
    //     <div className="info__desc"></div>
    //   </div>
    //   {scPostsData && (
    //     <div
    //       className="folio-post-container"
    //       ref={container}
    //       onClick={() => {
    //         handleFolioUpdate();
    //         handleSetLinkColour(
    //           folioPosts[folioIndex].props.post.linkCol,
    //           linkCol
    //         );
    //       }}
    //     >
    //       {folioPosts[folioIndex]}
    //     </div>
    //   )}

    //   <Footer linkCol={linkCol} />
    // </>
  );
};

export default Home;
