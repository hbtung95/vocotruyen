import { render, screen, fireEvent } from "@testing-library/react";
import Overlay from "./Overlay";

describe("Overlay", () => {
  it("renders overlay when open", () => {
    render(<Overlay open>Hi!</Overlay>);
    expect(screen.getByText("Hi!")).toBeInTheDocument();
  });
  it("does not render when open is false", () => {
    render(<Overlay open={false}>Bye</Overlay>);
    expect(screen.queryByText("Bye")).not.toBeInTheDocument();
  });
  it("calls onClick when clicked", () => {
    const fn = jest.fn();
    render(<Overlay onClick={fn}>Test</Overlay>);
    fireEvent.click(screen.getByText("Test").parentElement!);
    expect(fn).toHaveBeenCalled();
  });
});
