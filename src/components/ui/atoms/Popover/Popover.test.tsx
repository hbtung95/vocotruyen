import { render, screen, fireEvent } from "@testing-library/react";
import Popover from "./Popover";

describe("Popover", () => {
  it("renders content when clicked", () => {
    render(<Popover content="Hello">Click me</Popover>);
    fireEvent.click(screen.getByText("Click me"));
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
