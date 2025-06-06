import { useRef } from "react";

//gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const ProjectPanel = ({ project, gridLayout }) => {
  console.log(project.images);
  return (
    <div className="project-panel">
      <div className="project-panel-header">
        <span>{project.name}</span>
        <span>{project.year}</span>
      </div>
      <div className="project-panel-image-section">
        {gridLayout === "grid-1" && (
          <div className="image-grid-1">
            <div className="image-grid-square" id="image-grid-1-square-1"></div>
            <div className="image-grid-square" id="image-grid-1-square-2"></div>
            <div className="image-grid-square" id="image-grid-1-square-3"></div>
            <div className="image-grid-square" id="image-grid-1-square-4"></div>
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
