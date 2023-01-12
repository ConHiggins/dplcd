import { render, screen } from "@testing-library/react";
import Home from "./Home.jsx";

test("loads video", () => {
    render(<Home />);
    const bgVideo = screen.getByRole("video");
    expect(bgVideo).toBeInTheDocument();
});
