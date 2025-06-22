import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("shows tooltip on hover", () => {
    render(<Tooltip content="Hello">Hover me</Tooltip>);
    fireEvent.mouseEnter(screen.getByText("Hover me"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  it("hides tooltip on mouse leave", () => {
    render(<Tooltip content="Bye">Out</Tooltip>);
    const trigger = screen.getByText("Out");
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("shows at correct position", () => {
    render(<Tooltip content="Left" position="left">L</Tooltip>);
    fireEvent.mouseEnter(screen.getByText("L"));
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });
});
