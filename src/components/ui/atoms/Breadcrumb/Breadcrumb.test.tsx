import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renders all items", () => {
    render(<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Page" }]} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Page")).toBeInTheDocument();
  });
  it("renders links and separator", () => {
    render(<Breadcrumb items={[{ label: "A", href: "/a" }, { label: "B" }]} separator=">" />);
    expect(screen.getByText("A")).toHaveAttribute("href", "/a");
    expect(screen.getByText(">")).toBeInTheDocument();
  });
});
