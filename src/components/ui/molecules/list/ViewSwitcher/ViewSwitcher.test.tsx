import { render, screen, fireEvent } from "@testing-library/react";
import ViewSwitcher from "./ViewSwitcher";

const views = [
  { key: "list", label: "Danh sách" },
  { key: "kanban", label: "Kanban" },
  { key: "calendar", label: "Lịch" },
];

describe("ViewSwitcher", () => {
  it("renders view buttons", () => {
    render(<ViewSwitcher views={views} current="kanban" onSwitch={jest.fn()} />);
    expect(screen.getByText("Kanban")).toBeInTheDocument();
    expect(screen.getByText("Danh sách")).toBeInTheDocument();
    expect(screen.getByText("Lịch")).toBeInTheDocument();
  });

  it("calls onSwitch when clicked", () => {
    const fn = jest.fn();
    render(<ViewSwitcher views={views} current="kanban" onSwitch={fn} />);
    fireEvent.click(screen.getByText("Danh sách"));
    expect(fn).toHaveBeenCalledWith("list");
  });

  it("highlights active view", () => {
    render(<ViewSwitcher views={views} current="calendar" onSwitch={jest.fn()} />);
    expect(screen.getByText("Lịch").parentElement).toHaveClass("active");
  });
});
