//react
import { useRef } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

//components

//css
import "./Projects.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Home = ({ scPostsData }) => {
  //! REFACTOR THIS - not nice and probably unperformant
  //   const fractelVideo = scPostsData.filter((p) => {
  //     return p.slug === "fractel_folio";
  //   });

  const wrapper = useRef();
  const content = useRef();

  useGSAP(
    () => {
      wrapper.current = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 3,
        effects: true,
      });
    },
    { scope: wrapper }
  );

  useGSAP(() => {
    let mm = gsap.matchMedia();

    //anim-boilerplate

    mm.add("(min-width: 768px)", () => {
      //   gsap.from("#fractel-1", {
      //     y: 450,
      //     scrollTrigger: {
      //       trigger: "#fractel-image-section",
      //       start: "top bottom",
      //       end: "+=1080",
      //       scrub: true,
      //       markers: false,
      //     },
      //   });
      //   gsap.from("#fractel-images", {
      //     scrollTrigger: {
      //       trigger: "#fractel-image-section",
      //       start: "top top",
      //       end: "+=600",
      //       scrub: true,
      //       pin: true,
      //     },
      //   });
    });
  });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        <div className="projects"></div>
      </div>
    </div>
  );
};

export default Home;
