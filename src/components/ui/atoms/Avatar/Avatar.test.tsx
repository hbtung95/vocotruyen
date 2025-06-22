import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders image when src provided", () => {
    render(<Avatar src="avatar.png" alt="Tony" />);
    const img = screen.getByAltText("Tony");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "avatar.png");
  });

  it("renders placeholder when no src", () => {
    render(<Avatar alt="A" />);
    expect(screen.getByLabelText("A")).toBeInTheDocument();
  });

  it("supports size prop", () => {
    render(<Avatar size={40} />);
    expect(screen.getByRole("img")).toHaveStyle({ width: "40px", height: "40px" });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Avatar alt="A" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
