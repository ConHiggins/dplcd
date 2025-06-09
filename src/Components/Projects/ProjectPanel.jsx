import { useRef } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const ProjectPanel = ({ project, gridLayout }) => {
  console.log(project);

  let imageStack = project.imageStack;

  return (
    <div className="project-panel">
      <div className="project-panel-header">
        <span className="project-panel-title">{project.title}</span>
        <span className="project-panel-year">{project.year}</span>
      </div>
      <div className="project-panel-image-section">
        {Array.isArray(imageStack) && (
          <>
            {gridLayout === "grid-1" && (
              <div className="image-grid-1">
                <div className="image-grid-square" id="image-grid-1-square-1">
                  <img src={project.imageStack[0]} alt="" />
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
