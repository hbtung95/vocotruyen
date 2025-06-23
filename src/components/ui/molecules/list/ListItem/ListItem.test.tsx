import { render, screen, fireEvent } from "@testing-library/react";
import ListItem from "./ListItem";

describe("ListItem", () => {
  it("renders label and icon", () => {
    render(<ListItem label="Test" icon={<span>🔗</span>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("🔗")).toBeInTheDocument();
  });

  it("renders description if provided", () => {
    render(<ListItem label="A" description="desc" />);
    expect(screen.getByText("desc")).toBeInTheDocument();
  });

  it("shows selected style when selected", () => {
    render(<ListItem label="Selected" selected />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-selected", "true");
  });

  it("handles onClick", () => {
    const mockFn = jest.fn();
    render(<ListItem label="Click" onClick={mockFn} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalled();
  });

  it("renders actions if provided", () => {
    render(<ListItem label="A" actions={<button>Edit</button>} />);
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  it("is disabled if disabled", () => {
    render(<ListItem label="Disabled" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
