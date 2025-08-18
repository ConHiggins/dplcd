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
  const fractelXDsplaced = scPostsData.find((p) => {
    return p.slug === "terrasyn";
  });

  const myProtein = scPostsData.find((p) => {
    return p.slug === "manchester-run-club";
  });

  const ajStillness = scPostsData.find((p) => {
    return p.slug === "alan-johnson-stillness";
  });

  const ajProfile = scPostsData.find((p) => {
    return p.slug === "alan-johnson-profile";
  });

  const highlineZine = scPostsData.find((p) => {
    return p.slug === "highline-zine";
  });

  const bop = scPostsData.find((p) => {
    return p.slug === "dj-academy";
  });

  const highlineDsplacedVideo = scPostsData.filter((p) => {
    return p.slug === "hike-society-AT95";
  });

  const fthmlssVideo = scPostsData.filter((p) => {
    return p.slug === "niagra";
  });

  const wrapper = useRef();
  const content = useRef();

  useGSAP(
    () => {
      wrapper.current = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1.5,
        effects: true,
      });
    },
    { scope: wrapper }
  );

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        <div className="home">
          <div></div>
        </div>
      </div>
    </div>
  );
};

//!!! Keep GSAP Snips for later ref
// useGSAP(() => {
//   let mm = gsap.matchMedia();

//   //fractal-anims
//   const pinVal = "+=1440";

//   mm.add("(min-width: 768px)", () => {
//     gsap.from("#fractel-1", {
//       y: 450,
//       scrollTrigger: {
//         trigger: "#fractel-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//         markers: false,
//       },
//     });

//     gsap.from("#fractel-2", {
//       y: 750,
//       scrollTrigger: {
//         trigger: "#fractel-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//         markers: false,
//       },
//     });

//     gsap.from("#fractel-3", {
//       y: 1050,
//       scrollTrigger: {
//         trigger: "#fractel-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//         markers: false,
//       },
//     });

//     gsap.from("#fractel-images", {
//       scrollTrigger: {
//         trigger: "#fractel-image-section",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//       },
//     });

//     //my-protein-anims
//     gsap.from("#my-protein-1", {
//       y: 1050,
//       scrollTrigger: {
//         trigger: "#my-protein-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#my-protein-2", {
//       y: 750,
//       scrollTrigger: {
//         trigger: "#my-protein-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#my-protein-3", {
//       y: 450,
//       scrollTrigger: {
//         trigger: "#my-protein-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#my-protein-images", {
//       scrollTrigger: {
//         trigger: "#my-protein-image-section",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//       },
//     });

//     //stillness-anims
//     gsap.from("#stillness-video-container", {
//       scrollTrigger: {
//         trigger: "#stillness-video-container",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//       },
//     });

//     //alan-johnson-anims
//     gsap.from("#alan-johnson-1", {
//       y: 450,
//       scrollTrigger: {
//         trigger: "#alan-johnson-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#alan-johnson-2", {
//       y: 750,
//       scrollTrigger: {
//         trigger: "#alan-johnson-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#alan-johnson-3", {
//       y: 1050,
//       scrollTrigger: {
//         trigger: "#alan-johnson-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#alan-johnson-images", {
//       scrollTrigger: {
//         trigger: "#alan-johnson-image-section",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//       },
//     });

//     //highline-zine-anims
//     gsap.from("#highline-zine-1", {
//       y: 1050,
//       scrollTrigger: {
//         trigger: "#highline-zine-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#highline-zine-2", {
//       y: 750,
//       scrollTrigger: {
//         trigger: "#highline-zine-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#highline-zine-3", {
//       y: 450,
//       scrollTrigger: {
//         trigger: "#highline-zine-image-section",
//         start: "top bottom",
//         end: "+=1080",
//         scrub: true,
//       },
//     });

//     gsap.from("#highline-zine-images", {
//       scrollTrigger: {
//         trigger: "#highline-zine-image-section",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//       },
//     });

//     //bop anims
//     gsap.from("#bop-video", {
//       scrollTrigger: {
//         trigger: "#bop-video",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//         markers: false,
//       },
//     });

//     //highline video anims
//     gsap.from("#highline-dsplaced-video", {
//       scrollTrigger: {
//         trigger: "#highline-dsplaced-video",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//         markers: false,
//       },
//     });

//     //fthmless anims
//     gsap.from("#fthmlss-video", {
//       scrollTrigger: {
//         trigger: "#fthmlss-video",
//         start: "top top",
//         end: pinVal,
//         scrub: true,
//         pin: true,
//         markers: false,
//       },
//     });
//   });
// });

export default Home;
