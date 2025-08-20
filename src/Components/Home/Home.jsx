//react
import { useRef, useState, useEffect } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/all";

//components
import HomeVideo from "./HomeVideo.jsx";
import HomeImage from "./HomeImage.jsx";

//css
import "./Home.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const Home = ({ scPostsData }) => {
  const [landingImage, setLandingImage] = useState(0);

  //stub data
  const servicesList = [
    "CREATIVE DIRECTION",
    "BRAND",
    "FILM & PHOTOGRAPHY",
    "PRODUCTION",
    "DESIGN",
    "2D / 3D MOTION",
  ];

  //assets
  const landing = scPostsData.find((p) => {
    return p.slug === "landing";
  });

  const services = scPostsData.find((p) => {
    return p.slug === "services";
  });

  const alfie = scPostsData.find((p) => {
    return p.slug === "myprotein-alfie";
  });

  const terrasyn = scPostsData.find((p) => {
    return p.slug === "fractel-x-dsplaced-terrasyn";
  });

  // const myProtein = scPostsData.find((p) => {
  //   return p.slug === "manchester-run-club";
  // });

  // const ajStillness = scPostsData.find((p) => {
  //   return p.slug === "alan-johnson-stillness";
  // });

  // const ajProfile = scPostsData.find((p) => {
  //   return p.slug === "alan-johnson-profile";
  // });

  // const highlineZine = scPostsData.find((p) => {
  //   return p.slug === "highline-zine";
  // });

  // const bop = scPostsData.find((p) => {
  //   return p.slug === "dj-academy";
  // });

  // const highlineDsplacedVideo = scPostsData.filter((p) => {
  //   return p.slug === "hike-society-AT95";
  // });

  // const fthmlssVideo = scPostsData.filter((p) => {
  //   return p.slug === "niagra";
  // });

  const wrapper = useRef();
  const content = useRef();
  const landingRef = useRef();

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

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // gsap.from("#landing", {
      //   scrollTrigger: {},
      // });
      gsap.from("#landing", {
        scrollTrigger: {
          trigger: "#landing",
          start: "top top",
          end: "+=750",
          pin: true,
          onUpdate: (self) => setLandingImage(Math.floor(self.progress * 5)),
        },
      });

      gsap.from("#rainyday-logo", {
        scrollTrigger: {
          trigger: "#rainyday-logo",
          start: "top top",
          end: "bottom 12%",
          pin: true,
          markers: true,
          scrub: true,
        },
      });
    });
  });
  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        <div className="home">
          <div id="landing" ref={landingRef}>
            <div id="rainyday-logo-container">
              <h1 id="rainyday-logo">RAINYDAY</h1>
            </div>
            <div id="landing-image-container">
              <img id="landing-image" src={landing.imageStack[landingImage]} />
            </div>
          </div>
          <div id="info">
            <div id="info-left">
              <div id="info-text-container">
                {/* <h2>RAINYDAY</h2> */}
                <p>
                  <span className="emph">RAINYDAY</span> is a UK based creative
                  studio & production house working globally across creative
                  direction, film & still image.
                </p>
                <p>
                  We offer a full service approach,{" "}
                  <span className="emph">RAINYDAY</span> works from concept
                  development and ideation through to production and execution
                  of creative campaigns.
                </p>
              </div>
            </div>
            <div id="info-right">
              <img id="info-image" src={alfie.imageStack[0]} />
            </div>
          </div>
          <div id="video">
            <HomeVideo type="video" post={alfie} playVid={true} />
          </div>
          <div id="home-projects">
            <div id="home-projects-text-container">
              <h1 id="home-projects-text">PROJECTS</h1>
            </div>
            <div id="home-project-section">
              <div className="home-project-container" id="project-1-container">
                <div className="home-project-image-container"></div>
                <div className="home-project-details">
                  <h3>PROJECT 1</h3>
                  <p>Some small write up and description about Project 1</p>
                </div>
              </div>
              <div className="home-project-container" id="project-2-container">
                <div className="home-project-image-container"></div>
                <div className="home-project-details">
                  <h3>PROJECT 2</h3>
                  <p>
                    Another small write up and description about Project 2 Lorem
                    ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur aperiam eum accusantium eligendi nesciunt
                    perferendis maiores iure quae quidem cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="services">
            <div id="services-text-container">
              {servicesList.map((service) => {
                return <span>{service}</span>;
              })}
            </div>
            <div id="services-image-container">
              <img src={services.imageStack[0]} />
            </div>
          </div>
          <div id="contact">
            <div id="contact-video-container">
              <video
                className={`folio-video`}
                type="video/mp4"
                autoPlay={true}
                id="video"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
              >
                <source src={terrasyn.video} />
              </video>
            </div>
            <div id="contact-footer">
              <div className="contact-footer-block" id="contact-footer-logo">
                <span>RAINYDAY</span>
              </div>
              <div className="contact-footer-block" id="contact-footer-email">
                <span>
                  <span className="contact-footer-bold">E:</span>{" "}
                  <span className="contact-footer-link">
                    <a href="mailto:contact@raindaystudio.co.uk">
                      contact@raindaystudio.co.uk
                    </a>
                  </span>
                </span>
              </div>
              <div
                className="contact-footer-block"
                id="contact-footer-instagram"
              >
                <span className="contact-footer-link">
                  <a href="https://www.instagram.com/rainydaystudio__">
                    Instagram{" "}
                  </a>
                </span>
              </div>
              <div className="contact-footer-block" id="contact-footer-site">
                <span>Site Design & Development</span>
              </div>
              <div
                className="contact-footer-block"
                id="contact-footer-site-credit"
              >
                <span>
                  <span className="contact-footer-intersect">INTERSECT</span>
                  <span> | </span>
                  <span className="contact-footer-rainyday">RAINYDAY</span>
                </span>
              </div>
              <div
                className="contact-footer-block"
                id="contact-footer-copyright"
              >
                <span>
                  © <span className="contact-footer-rainyday">RAINYDAY</span>{" "}
                  2025
                </span>
              </div>
            </div>
          </div>
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
