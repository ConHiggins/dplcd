//react
import { useRef } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

//components
import HomeVideo from "./HomeVideo.jsx";
import HomeImage from "./HomeImage.jsx";

//css
import "./Home.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Home = ({ scPostsData }) => {
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

  const ajFolio2 = scPostsData.filter((p) => {
    return p.slug === "aj_folio2";
  });

  const gloryDays = scPostsData.filter((p) => {
    return p.slug === "glory-days-port";
  });

  const highlineZine = scPostsData.filter((p) => {
    return p.slug === "highline-zine";
  });

  const bopVideo = scPostsData.filter((p) => {
    return p.slug === "bop_video";
  });

  const highlineDsplacedVideo = scPostsData.filter((p) => {
    return p.slug === "highline_dsplaced_video";
  });

  const fthmlssVideo = scPostsData.filter((p) => {
    return p.slug === "fthmlss_folio";
  });

  const wrapper = useRef();
  const content = useRef();

  useGSAP(
    () => {
      wrapper.current = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1,
        effects: true,
      });
    },
    { scope: wrapper }
  );

  useGSAP(() => {
    let mm = gsap.matchMedia();

    //fractal-anims
    const pinVideo = "+=1200";

    mm.add("(min-width: 768px)", () => {
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
          end: pinVideo,
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

      //bop anims
      gsap.from("#bop-video", {
        scrollTrigger: {
          trigger: "#bop-video",
          start: "top top",
          end: pinVideo,
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      //highline video anims
      gsap.from("#highline-dsplaced-video", {
        scrollTrigger: {
          trigger: "#highline-dsplaced-video",
          start: "top top",
          end: pinVideo,
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      //fthmless anims
      gsap.from("#fthmlss-video", {
        scrollTrigger: {
          trigger: "#fthmlss-video",
          start: "top top",
          end: pinVideo,
          scrub: true,
          pin: true,
          markers: false,
        },
      });
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
                  image={myProteinImages[0].imageStack[1]}
                  imageClass="four-by-five-image"
                />
              </div>
              <div id="my-protein-2">
                <HomeImage
                  image={myProteinImages[0].imageStack[0]}
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
          <div id="bop-video">
            <div id="bop-video-container">
              <HomeVideo type="video" post={bopVideo[0]} playVid={true} />
            </div>
          </div>
          <div></div>
          <div id="highline-dsplaced-video">
            <div id="highline-dsplaced-video-container">
              <HomeVideo
                type="video"
                post={highlineDsplacedVideo[0]}
                playVid={true}
              />
            </div>
          </div>
          <div id="fthmlss-video">
            <div id="fthmlss-video-container">
              <HomeVideo type="video" post={fthmlssVideo[0]} playVid={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
