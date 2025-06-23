import { render, screen } from "@testing-library/react";
import ListItemSkeleton from "./ListItemSkeleton";

describe("ListItemSkeleton", () => {
  it("renders icon skeleton if withIcon is true", () => {
    render(<ListItemSkeleton withIcon />);
    expect(screen.getByLabelText("Đang tải dữ liệu").children[0]).toBeInTheDocument();
  });

  it("renders the correct number of lines", () => {
    render(<ListItemSkeleton lines={3} />);
    expect(screen.getByLabelText("Đang tải dữ liệu").querySelectorAll("div.h-3")).toHaveLength(3);
  });

  it("renders action skeletons if actionsCount > 0", () => {
    render(<ListItemSkeleton actionsCount={2} />);
    // 1 icon, 1 label, 2 action skeletons = total 4
    expect(screen.getByLabelText("Đang tải dữ liệu").children).toHaveLength(4);
  });
});
