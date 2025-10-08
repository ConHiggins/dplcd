//react
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

const RainydayLogoSVG = () => {
  return (
    <svg
      id="rainyday-svg"
      width="503"
      height="69"
      viewBox="0 0 503 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.914797 69V0.399995H30.4128C45.1128 0.399995 53.8348 9.122 53.8348 22.744C53.8348 33.916 48.0528 40.776 38.5468 43.226L57.6568 69H40.4088L22.6708 44.304H14.9288V69H0.914797ZM14.9288 32.054H28.8448C36.1948 32.054 39.6248 28.526 39.6248 22.94C39.6248 17.256 36.0968 13.728 28.8448 13.728H14.9288V32.054ZM63.0116 69L88.6876 0.399995H106.426L132.102 69H117.206L111.326 52.83H83.6896L77.8096 69H63.0116ZM88.4916 39.502H106.524L97.5076 14.512L88.4916 39.502ZM142.268 69V0.399995H156.282V69H142.268ZM186.657 0.399995L216.547 48.322L215.273 29.114V0.399995H229.287V69H213.117L183.325 20.98L184.599 40.286V69H170.585V0.399995H186.657ZM239.01 0.399995H254.788L270.272 30.584L285.756 0.399995H301.534L277.328 46.264V69H263.216L263.314 46.558L239.01 0.399995ZM311.759 69V0.399995H336.553C356.545 0.399995 371.637 15.002 371.637 34.7C371.637 54.3 356.545 69 336.553 69H311.759ZM325.773 55.672H336.553C348.901 55.672 357.623 47.048 357.623 34.7C357.623 22.352 348.901 13.728 336.553 13.728H325.773V55.672ZM374.908 69L400.584 0.399995H418.322L443.998 69H429.102L423.222 52.83H395.586L389.706 69H374.908ZM400.388 39.502H418.42L409.404 14.512L400.388 39.502ZM439.699 0.399995H455.477L470.961 30.584L486.445 0.399995H502.223L478.017 46.264V69H463.905L464.003 46.558L439.699 0.399995Z"
        fill="#023373"
      />
    </svg>
  );
};

const Home = ({ scPostsData }) => {
  const [landingImageIndex, setLandingImageIndex] = useState(0);

  //stub data
  const servicesList = [
    "CREATIVE DIRECTION",
    "CREATIVE STRATEGY",
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

  const byu = scPostsData.find((p) => {
    return p.slug === "myprotein-byu";
  });

  const sis = scPostsData.find((p) => {
    return p.slug === "sis-hydro";
  });

  const lululemon = scPostsData.find((p) => {
    return p.slug === "lululemon";
  });

  const project1 = sis;
  const project2 = byu;
  const project3 = lululemon;

  const wrapper = useRef();
  const content = useRef();
  const landingRef = useRef();

  let navigate = useNavigate();

  const handleProjectClick = () => {
    navigate("/projects");
  };

  useGSAP(
    () => {
      wrapper.current = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      });
    },
    { scope: wrapper }
  );

  const landingLogoContainer = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    let pinSectionVal = "+=1200";

    gsap.from("#landing", {
      scrollTrigger: {
        trigger: "#landing",
        start: "top top",
        end: pinSectionVal,
        scrub: true,
        pin: true,
      },
    });

    gsap.from("#home-info", {
      scrollTrigger: {
        trigger: "#home-info",
        start: "top top",
        end: pinSectionVal,
        scrub: true,
        pin: true,
      },
    });

    gsap.from("#home-video", {
      scrollTrigger: {
        trigger: "#home-video",
        start: "top top",
        end: pinSectionVal,
        scrub: true,
        pin: true,
      },
    });

    gsap.from("#home-projects", {
      scrollTrigger: {
        trigger: "#home-projects",
        start: "top top",
        end: pinSectionVal,
        scrub: true,
        pin: true,
      },
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

    mm.add("(min-width: 1024px)", () => {
      const projectSectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home-video",
          start: "60%",
          end: "100%",
          scrub: true,
        },
      });

      // const projectResponsiveWidth =
      //   document.querySelector("#home-project-section").offsetWidth * 0.25;

      projectSectionTimeline.from(
        "#project-1-container",
        {
          y: 100,
          ease: "none",
        },
        0
      );

      projectSectionTimeline.from(
        "#project-2-container",
        {
          y: 125,
          ease: "none",
        },
        0
      );

      projectSectionTimeline.from(
        "#project-3-container",
        {
          y: 150,
          ease: "none",
        },
        0
      );
    });

    mm.add("(min-width: 768px)", () => {
      //!LANDING
      //rainyday logo translation;
      pinSectionVal = "+=600";
      const landingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".navbar",
          start: "top top",
          end: "+=1200",
          scrub: true,
          // markers: true,
          //switch inages on scroll
          onUpdate: (self) => {
            let val = Math.ceil(self.progress * 6 - 1);
            if (val < 0) val = 0;
            Math.abs(val) !== landingImageIndex &&
              setLandingImageIndex(Math.abs(val));
          },
        },
      });

      const imageHeight = document.querySelector("#landing-image").offsetHeight;
      const SVGHeight = document
        .querySelector("#rainyday-svg")
        .getBoundingClientRect().height;

      const translateVal = imageHeight - SVGHeight;

      landingTimeline.to(
        "#rainyday-svg",
        {
          y: translateVal,
          ease: "none",
        },
        0
      );

      //landing-section pinning

      //!HOME-INFO
      const infoText = SplitText.create("#home-info-text-container", {
        type: "words",
      });

      const infoTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home-info",
          start: "top center",
          end: "25%",
          scrub: true,
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
        },
        y: 400,
        easing: "none",
      });

      //home-info pinning

      //!HOME-VIDEO

      //!HOME-PROJECTS
      //home-projects-pinning

      const projectTextTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home-video",
          start: "10%",
          end: "75%",
          scrub: true,
        },
      });

      projectTextTimeline.from(
        "#home-projects-text",
        {
          y: 250,
          ease: "none",
        },
        0
      );

      //!SERVICES
      const servicesText = SplitText.create("#services-text", {
        type: "lines",
      });

      const servicesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#home-projects",
          start: "50%",
          end: "120%",
          scrub: true,
        },
      });

      servicesTimeline.from(
        servicesText.lines,
        {
          y: -30,
          autoAlpha: 0,
          stagger: 0.1,
        },
        0
      );

      servicesTimeline.from(
        "#services-image-container",
        {
          y: 400,
        },
        0
      );
    });
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        <div className="home">
          <div id="landing" ref={landingRef}>
            <div id="landing-body">
              <div ref={landingLogoContainer} id="rainyday-logo-container">
                <RainydayLogoSVG />
              </div>
              <div id="landing-image-container">
                {landing.imageStack.map((image, index) => {
                  return (
                    <img
                      key={image + "_" + index}
                      style={{
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
            <div id="home-info-right">
              <img id="home-info-image" src={alfie.imageStack[0]} />
            </div>
            <div id="home-info-left">
              <div id="home-info-text-container">
                {/* <h2>RAINYDAY</h2> */}
                <p>
                  <span className="emph">RAINYDAY</span> is a UK based creative
                  studio and production house working globally from concept
                  development and ideation through to production and execution
                  of impactful creative campaigns.
                </p>
                {/* <p>
                  <span className="emph">RAINYDAY</span> works from concept
                  development and ideation through to production and execution
                  of creative campaigns.
                </p>                  
                */}
              </div>
            </div>
          </div>
          <div id="home-video">
            <HomeVideo type="video" post={byu} playVid={true} />
          </div>
          <div id="home-projects">
            <div id="home-project-section">
              <div className="home-project-container" id="project-1-container">
                <div
                  className="home-project-image-container"
                  onClick={handleProjectClick}
                >
                  <img src={project1.imageStack[0]} />
                </div>
                <div className="home-project-details">
                  <h3 className="home-project-title">{project1.title}</h3>
                  <p className="home-project-description">
                    {project1.description}
                  </p>
                </div>
              </div>
              <div className="home-project-container" id="project-2-container">
                <div
                  className="home-project-image-container"
                  onClick={handleProjectClick}
                >
                  <img src={project2.imageStack[0]} />
                </div>
                <div className="home-project-details">
                  <div className="home-project-text">
                    <h3>{project2.title}</h3>
                    <p>{project2.description}</p>
                  </div>
                </div>
              </div>
              <div className="home-project-container" id="project-3-container">
                <div
                  className="home-project-image-container"
                  onClick={handleProjectClick}
                >
                  <img src={project3.imageStack[2]} />
                </div>
                <div className="home-project-details">
                  <div className="home-project-text">
                    <h3>{project3.title}</h3>
                    <p>{project3.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="home-projects-block"></div>
          </div>
          <div id="services">
            <div id="services-text-container">
              <div id="services-text">
                {servicesList.map((service) => {
                  return <p>{service}</p>;
                })}
              </div>
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
                <source src={alfie.video} />
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
                    <a href="mailto:hello@raindaystudio.co.uk">
                      hello@raindaystudio.co.uk
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
