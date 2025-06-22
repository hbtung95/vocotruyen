import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

describe("Icon", () => {
  it("renders icon by name", () => {
    render(<Icon name="search" aria-label="search" />);
    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  it("renders with custom size", () => {
    render(<Icon name="user" size={40} aria-label="user" />);
    expect(screen.getByLabelText("user").querySelector("svg")).toHaveAttribute("width", "40");
  });

  it("renders nothing if name invalid", () => {
    render(<Icon name="notfound" />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
