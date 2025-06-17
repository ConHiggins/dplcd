export const getGridStyle = (project, view) => {
  let gap;
  if (view === "desktop-large") {
    gap = "1.5rem";
  }

  if (view !== "desktop-large") {
    gap = "1rem";
  }

  if (view === "mobile") {
    return {
      display: "grid",
      height: "100%",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      columnGap: "1rem",
      rowGap: "1rem",
    };
  }

  if (
    project.gridLayout === 0 ||
    project.gridLayout === 2 ||
    project.gridLayout === 4 ||
    project.gridLayout === 5
  ) {
    return {
      display: "grid",
      height: "100%",
      gridTemplateColumns: "55% 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      columnGap: gap,
      rowGap: gap,
    };
  }

  if (project.gridLayout === 1) {
    return {
      display: "grid",
      height: "100%",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      columnGap: gap,
    };
  }

  if (project.gridLayout === 2) {
    return {
      display: "grid",
      height: "100%",
      gridTemplateColumns: "55% 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      columnGap: gap,
      rowGap: gap,
    };
  }

  if (project.gridLayout === 3) {
    return {
      display: "grid",
      height: "100%",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "1fr",
      columnGap: gap,
      rowGap: gap,
    };
  }
};

export const getSquareStyle = (project, position) => {
  if (project.gridLayout === 0) {
    switch (position) {
      case 0:
        return {
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 1,
          gridRowEnd: 3,
        };
      case 1:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 3,
        };
      case 2:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 2,
        };
      case 3:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 2,
          gridRowEnd: 3,
        };
      case 4:
        return { display: "none" };
    }
  }

  if (project.gridLayout === 1) {
    switch (position) {
      case 0:
        return {
          gridColumnStart: 1,
          gridColumnEnd: 2,
        };
      case 1:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
        };
      case 2:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
        };
      case 3:
        return { display: "none" };
      case 4:
        return { display: "none" };
    }
  }

  if (project.gridLayout === 2) {
    switch (position) {
      case 0:
        return {
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 1,
          gridRowEnd: 3,
        };
      case 1:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 2,
        };
      case 2:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 2,
        };

      case 3:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 2,
          gridRowEnd: 3,
        };
      case 4:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 2,
          gridRowEnd: 3,
        };
    }
  }

  if (project.gridLayout === 3) {
    switch (position) {
      case 0:
        return { gridColumnStart: 1, gridColumnEnd: 2 };
      case 1:
        return { gridColumnStart: 2, gridColumnEnd: 3 };
      case 2:
        return { gridColumnStart: 3, gridColumnEnd: 4 };
      case 3:
        return { gridColumnStart: 4, gridColumnEnd: 5 };
      case 4:
        return { display: "none" };
    }
  }

  if (project.gridLayout === 4) {
    switch (position) {
      case 0:
        return {
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 1,
          gridRowEnd: 3,
        };
      case 1:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 2,
        };
      case 2:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 2,
          gridRowEnd: 3,
        };
      case 3:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 2,
          gridRowEnd: 3,
        };
      case 4:
        return { display: "none" };
    }
  }

  if (project.gridLayout === 5) {
    switch (position) {
      case 0:
        return {
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 1,
          gridRowEnd: 3,
        };
      case 1:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 2,
        };
      case 2:
        return {
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 2,
          gridRowEnd: 3,
        };
      case 3:
        return {
          gridColumnStart: 3,
          gridColumnEnd: 4,
          gridRowStart: 1,
          gridRowEnd: 3,
        };
      case 4:
        return { display: "none" };
    }
  }
};
