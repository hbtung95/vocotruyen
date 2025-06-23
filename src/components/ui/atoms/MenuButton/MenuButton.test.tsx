import { render, screen, fireEvent } from "@testing-library/react";
import MenuButton from "./MenuButton";

describe("MenuButton", () => {
  it("renders children and caret", () => {
    render(<MenuButton>Menu</MenuButton>);
    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("▼")).toBeInTheDocument();
  });

  it("shows ▲ caret when open", () => {
    render(<MenuButton open>OpenMenu</MenuButton>);
    expect(screen.getByText("▲")).toBeInTheDocument();
  });

  it("calls onClick", () => {
    const fn = jest.fn();
    render(<MenuButton onClick={fn}>Open</MenuButton>);
    fireEvent.click(screen.getByText("Open"));
    expect(fn).toHaveBeenCalled();
  });

  it("renders with variant and size", () => {
    render(<MenuButton variant="outline" size="lg">Btn</MenuButton>);
    expect(screen.getByText("Btn")).toBeInTheDocument();
  });
});
