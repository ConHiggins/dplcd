import { useRef } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const ProjectPanel = ({
  project,
  setModalOpen,
  setModalProject,
  setModalMode,
  setModalImage,
}) => {
  let imageStack = project.imageStack;

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
        </span>
        <span className="project-panel-year">{project.year}</span>
      </div>
      <div className="project-panel-image-section">
        {/* PROJECT GRID 1*/}
        {project.gridLayout === "grid-1" && (
          <div className="image-grid-1">
            <div className="image-grid-square" id="image-grid-1-square-1">
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
            </div>
            {Array.isArray(project.imageStack) &&
              project.imageStack.length > 0 && (
                <>
                  {!project.video && (
                    <div
                      className="image-grid-square"
                      id="image-grid-1-square-1"
                      onClick={() => handleClick("image", 0)}
                    >
                      <img src={project.imageStack[0]} alt="" />
                    </div>
                  )}
                  <div
                    className="image-grid-square"
                    id="image-grid-1-square-2"
                    onClick={() => handleClick("image", 1)}
                  >
                    <img src={project.imageStack[1]} alt="" />
                  </div>
                  <div
                    className="image-grid-square"
                    id="image-grid-1-square-3"
                    onClick={() => handleClick("image", 2)}
                  >
                    <img src={project.imageStack[2]} alt="" />
                  </div>
                  <div
                    className="image-grid-square"
                    id="image-grid-1-square-4"
                    onClick={() => handleClick("image", 3)}
                  >
                    <img src={project.imageStack[3]} alt="" />
                  </div>
                </>
              )}
          </div>
        )}
        {/* PROJECT GRID 2*/}
        {project.gridLayout === "grid-2" && (
          <div className="image-grid-2">
            <div className="image-grid-square" id="image-grid-2-square-1">
              {project.video ? (
                <video
                  onClick={() => handleClick("video")}
                  // style={videoStyle}
                  // ref={videoRef}
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
              ) : (
                <img
                  onClick={() => handleClick("image", 0)}
                  src={project.imageStack[0]}
                  alt=""
                />
              )}
            </div>

            <div className="image-grid-square" id="image-grid-2-square-2">
              <img
                onClick={() => handleClick("image", 1)}
                src={project.imageStack[1]}
                alt=""
              />
            </div>
            <div className="image-grid-square" id="image-grid-2-square-3">
              <img
                onClick={() => handleClick("image", 2)}
                src={project.imageStack[2]}
                alt=""
              />
            </div>
          </div>
        )}
        <div className="project-panel-details-section">
          <div className="project-panel-description">
            <p>{project.description}</p>
          </div>
          <div className="project-panel-badges">
            {project.badges.map((badge, index) => {
              return (
                <div className="project-panel-badge" key={badge + "_" + index}>
                  <span>{badge}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
