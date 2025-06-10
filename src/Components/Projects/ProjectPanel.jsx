import { useRef } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const ProjectPanel = ({ project, video }) => {
  let imageStack = project.imageStack;

  const videoRef = useRef();

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
        {Array.isArray(imageStack) && (
          <>
            {project.gridLayout === "grid-1" && (
              <div className="image-grid-1">
                <div className="image-grid-square" id="image-grid-1-square-1">
                  {project.video ? (
                    <video
                      // ref={videoRef}
                      // onMouseEnter={videoRef.current.play()}
                      // onMouseLeave={videoRef.current.pause()}
                      // style={videoStyle}
                      // ref={videoRef}
                      className={"project-video"}
                      type="video/mp4"
                      autoPlay={false}
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
                    <img src={project.imageStack[0]} alt="" />
                  )}
                </div>

                <div className="image-grid-square" id="image-grid-1-square-2">
                  <img src={project.imageStack[1]} alt="" />
                </div>
                <div className="image-grid-square" id="image-grid-1-square-3">
                  <img src={project.imageStack[2]} alt="" />
                </div>
                <div className="image-grid-square" id="image-grid-1-square-4">
                  <img src={project.imageStack[3]} alt="" />
                </div>
              </div>
            )}
            {project.gridLayout === "grid-2" && (
              <div className="image-grid-2">
                <div className="image-grid-square" id="image-grid-2-square-1">
                  {project.video ? (
                    <video
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
                    <img src={project.imageStack[0]} alt="" />
                  )}
                </div>

                <div className="image-grid-square" id="image-grid-2-square-2">
                  <img src={project.imageStack[1]} alt="" />
                </div>
                <div className="image-grid-square" id="image-grid-2-square-3">
                  <img src={project.imageStack[2]} alt="" />
                </div>
              </div>
            )}
          </>
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
