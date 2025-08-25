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

//css
import "./Home.scss";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const Home = ({ scPostsData }) => {
  const [landingImageIndex, setLandingImageIndex] = useState(0);

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
      const pinSectionVal = "+=1200";

      //!LANDING
      //rainyday logo translation;
      const landingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#landing",
          start: "top top",
          end: "85%",
          scrub: true,
          //switch inages on scroll
          onUpdate: (self) => {
            let val = Math.ceil(self.progress * 6 - 1);
            if (val < 0) val = 0;
            console.log(Math.abs(val));
            setLandingImageIndex(Math.abs(val));
          },
        },
      });

      const remainingHeight =
        document.querySelector("#landing-image").offsetHeight;

      landingTimeline.to(
        "#rainyday-logo",
        {
          y: remainingHeight,
          ease: "none",
        },
        0
      );

      // gsap.from("#rainyday-logo", {
      //   scrollTrigger: {
      //     target: "#landing",
      //     start: "top top",
      //     end: "100px",
      //     scrub: true,
      //     markers: true,
      //   },
      //   opacity: 0,
      //   ease: "none",
      // });

      // gsap.from("#landing-image", {
      //   scrollTrigger: {
      //     target: "#landing",
      //     start: "top top",
      //     end: "100px",
      //     scrub: true,
      //     markers: true,
      //   },
      //   xPercent: -45,
      //   ease: "none",
      // });

      // gsap.from("#landing-image", {
      //   scrollTrigger: {
      //     target: "#landing",
      //     start: "top top",
      //     end: "100px",
      //     scrub: true,
      //     markers: true,
      //   },
      //   height: "80vh",
      //   ease: "none",
      // });

      //landing-section pinning
      gsap.from("#landing", {
        scrollTrigger: {
          trigger: "#landing",
          start: "top top",
          end: pinSectionVal,
          scrub: true,
          pin: true,
        },
      });

      //!HOME-INFO
      const infoText = SplitText.create("#home-info-text-container", {
        type: "words",
      });

      const infoTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home-info",
          start: "top center",
          end: "85%",
          scrub: true,
          // pin: true,
        },
      });

      infoTimeline.from(infoText.words, {
        y: -30,
        autoAlpha: 0,
        stagger: 0.02,
      });

      gsap.from("#home-info-image", {
        scrollTrigger: {
          trigger: "#home-info",
          start: "top center",
          end: "30%",
          scrub: true,
          // pin: true,
        },
        y: 400,
        easing: "none",
      });

      //home-info pinning
      gsap.from("#home-info", {
        scrollTrigger: {
          trigger: "#home-info",
          start: "top top",
          end: pinSectionVal,
          scrub: true,
          pin: true,
        },
      });

      //!HOME-VIDEO
      gsap.from("#home-video", {
        scrollTrigger: {
          trigger: "#home-video",
          start: "top top",
          end: pinSectionVal,
          scrub: true,
          pin: true,
        },
      });

      //!HOME-PROJECTS
      gsap.from("#home-projects", {
        scrollTrigger: {
          trigger: "#home-projects",
          start: "top top",
          end: pinSectionVal,
          scrub: true,
          pin: true,
        },
      });

      //!SERVICES
      const servicesText = SplitText.create("#services-text-container", {
        type: "lines",
      });

      const servicesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#services",
          start: "top center",
          end: "85%",
          scrub: true,
          // pin: true,
        },
      });

      servicesTimeline.from(servicesText.lines, {
        y: -30,
        autoAlpha: 0,
        stagger: 0.1,
      });

      gsap.from("#services", {
        scrollTrigger: {
          trigger: "#services",
          start: "top top",
          end: pinSectionVal,
          scrub: true,
          pin: true,
        },
      });
    });
  });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        <div className="home">
          <div id="landing" ref={landingRef}>
            <div id="landing-body">
              <div id="rainyday-logo-container">
                <h1 id="rainyday-logo">RAINYDAY</h1>
              </div>
              <div id="landing-image-container">
                {landing.imageStack.map((image, index) => {
                  return (
                    <img
                      key={image + "_" + index}
                      style={{
                        display: index === landingImageIndex ? "block" : "none",
                        visibility:
                          index === landingImageIndex ? "visible" : "hidden",
                      }}
                      id="landing-image"
                      src={image}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div id="home-info">
            <div id="home-info-left">
              <div id="home-info-text-container">
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
            <div id="home-info-right">
              <img id="home-info-image" src={alfie.imageStack[0]} />
            </div>
          </div>
          <div id="home-video">
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
                return <p>{service}</p>;
              })}
            </div>
            <div id="services-image-container">
              <img src={services.imageStack[landingImageIndex]} />
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

export default Home;
