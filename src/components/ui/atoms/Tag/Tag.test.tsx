import { render, screen, fireEvent } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders children", () => {
    render(<Tag>Tag test</Tag>);
    expect(screen.getByText("Tag test")).toBeInTheDocument();
  });

  it("shows close button and calls onClose", () => {
    const handleClose = jest.fn();
    render(<Tag closable onClose={handleClose}>Xoá tag</Tag>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClose).toHaveBeenCalled();
  });

  it("shows left/right icon", () => {
    render(<Tag leftIcon={<span>L</span>} rightIcon={<span>R</span>}>Tag</Tag>);
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();
  });
});
