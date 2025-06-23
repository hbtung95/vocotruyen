import { render, screen } from "@testing-library/react";
import Fieldset from "./Fieldset";

describe("Fieldset", () => {
  it("renders legend and children", () => {
    render(<Fieldset legend="Thông tin"><input placeholder="Test" /></Fieldset>);
    expect(screen.getByText("Thông tin")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
  });

  it("can be disabled", () => {
    render(<Fieldset disabled legend="Disabled"><input /></Fieldset>);
    expect(screen.getByRole("group")).toBeDisabled();
  });

  it("applies custom class", () => {
    render(<Fieldset className="test-class" legend="Test"><input /></Fieldset>);
    expect(screen.getByText("Test").parentElement?.parentElement).toHaveClass("test-class");
  });
});
