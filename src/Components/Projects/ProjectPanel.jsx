import { useState, useEffect } from "react";

//gsap
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

import { getGridStyle } from "../utils/projectLayoutHelpers";
import { getSquareStyle } from "../utils/projectLayoutHelpers";

export const ProjectPanel = ({
  project,
  setModalOpen,
  setModalProject,
  setModalMode,
  setModalImage,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [view, setView] = useState();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 0 && width <= 768) {
      setView("mobile");
    }

    if (width > 768 && width <= 1024) {
      setView("tablet");
    }

    if (width > 1024 && width <= 1768) {
      setView("desktop");
    }

    if (width > 1768) {
      setView("desktop-large");
    }
  }, [width]);

  console.log(view);

  const handleClick = (mode, image) => {
    setModalOpen(true);
    setModalProject(project);
    setModalMode(mode);
    setModalImage(image);
  };

  return (
    <div className="project-panel">
      <div className="project-panel-header">
        <span className="project-panel-title">
          {project.title}
          <span className="project-panel-client">
            {" // " + project.client}
          </span>
          {/* 
            <span style={{ color: "red" }}>
              DEBUG LAYOUT GRID = {project.gridLayout}
            </span>
           */}
        </span>
        <span className="project-panel-year">{project.year}</span>
      </div>
      <div className="project-panel-image-section">
        <div
          className="project-panel-image-grid"
          style={getGridStyle(project, view)}
        >
          <div className="image-grid-square" style={getSquareStyle(project, 0)}>
            {project.video && (
              <video
                onClick={() => handleClick("video")}
                className={"project-video"}
                type="video/mp4"
                autoPlay={true}
                id="video"
                crossOrigin="true"
                playsInline
                muted
                webkit-playsinline="true"
                loop
              >
                <source src={`${project.video}`} />
              </video>
            )}
            {!project.video && (
              <div
                className="image-grid-square"
                style={getSquareStyle(project, 0)}
                onClick={() => handleClick("image", 0)}
              >
                <img src={project.imageStack[0]} alt="" />
              </div>
            )}
          </div>
          {view !== "mobile" && (
            <>
              <div
                className="image-grid-square"
                style={getSquareStyle(project, 1)}
                onClick={() => handleClick("image", 1)}
              >
                <img src={project.imageStack[1]} alt="" />
              </div>
              <div
                className="image-grid-square"
                style={getSquareStyle(project, 2)}
                onClick={() => handleClick("image", 2)}
              >
                <img src={project.imageStack[2]} alt="" />
              </div>
              <div
                className="image-grid-square"
                style={getSquareStyle(project, 3)}
                onClick={() => handleClick("image", 3)}
              >
                <img src={project.imageStack[3]} alt="" />
              </div>
              <div
                className="image-grid-square"
                style={getSquareStyle(project, 4)}
                onClick={() => handleClick("image", 4)}
              >
                <img src={project.imageStack[4]} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="project-panel-details-section">
        <div className="project-panel-description">
          <p>{project.description}</p>
        </div>
        {view !== "mobile" && (
          <div className="project-panel-badges">
            {project.badges.map((badge, index) => {
              return (
                <div className="project-panel-badge" key={badge + "_" + index}>
                  <span>{badge}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
