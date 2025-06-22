import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>NEW</Badge>);
    expect(screen.getByText("NEW")).toBeInTheDocument();
  });

  it("applies pill style", () => {
    render(<Badge pill>OK</Badge>);
    expect(screen.getByText("OK")).toHaveClass("rounded-full");
  });

  it("applies variant class", () => {
    render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success").className).toMatch(/success/);
  });
});
