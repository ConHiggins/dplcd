import { getGridStyle, getSquareStyle } from "../utils/projectLayoutHelpers";

export const ImageSectionPlaceholder = ({ view, project }) => {
  return (
    <div className="project-panel-image-section">
      <div
        className="project-panel-image-grid"
        style={getGridStyle(project, view)}
      >
        <div
          className="image-grid-square placeholder"
          style={getSquareStyle(project, 0)}
        ></div>
        {view !== "mobile" && (
          <>
            <div
              className="image-grid-square placeholder"
              style={getSquareStyle(project, 1)}
              //   onClick={() => handleClick("image", 1)}
            ></div>
            <div
              className="image-grid-square placeholder"
              style={getSquareStyle(project, 2)}
              //   onClick={() => handleClick("image", 2)}
            ></div>
            <div
              className="image-grid-square placeholder"
              style={getSquareStyle(project, 3)}
              //   onClick={() => handleClick("image", 3)}
            ></div>
            <div
              className="image-grid-square placeholder"
              style={getSquareStyle(project, 4)}
              //   onClick={() => handleClick("image", 4)}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};
