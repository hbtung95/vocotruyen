import { render, screen, fireEvent } from "@testing-library/react";
import ScrollSpyIndicator from "./ScrollSpyIndicator";

const sections = [
  { id: "a", label: "Giới thiệu" },
  { id: "b", label: "Quy định" },
  { id: "c", label: "Kết quả" },
];

describe("ScrollSpyIndicator", () => {
  it("renders all sections", () => {
    render(<ScrollSpyIndicator sections={sections} currentId="b" />);
    expect(screen.getByText("Giới thiệu")).toBeInTheDocument();
    expect(screen.getByText("Quy định")).toBeInTheDocument();
    expect(screen.getByText("Kết quả")).toBeInTheDocument();
  });

  it("calls onSectionClick", () => {
    const fn = jest.fn();
    render(<ScrollSpyIndicator sections={sections} currentId="c" onSectionClick={fn} />);
    fireEvent.click(screen.getByText("Quy định"));
    expect(fn).toHaveBeenCalledWith("b");
  });

  it("highlights active section", () => {
    render(<ScrollSpyIndicator sections={sections} currentId="a" />);
    expect(screen.getByText("Giới thiệu").parentElement).toHaveClass("active");
  });
});
