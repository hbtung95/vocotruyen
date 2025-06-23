import { render, screen, fireEvent } from "@testing-library/react";
import SavedViewMenu from "./SavedViewMenu";

const views = [
  { id: "all", name: "Tất cả" },
  { id: "final", name: "Chung kết", isDefault: true },
];

describe("SavedViewMenu", () => {
  it("renders current view", () => {
    render(<SavedViewMenu views={views} currentId="final" onSelect={jest.fn()} />);
    expect(screen.getByText("Chung kết (mặc định)")).toBeInTheDocument();
  });

  it("opens menu and selects a view", () => {
    const fn = jest.fn();
    render(<SavedViewMenu views={views} currentId="all" onSelect={fn} />);
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Chung kết (mặc định)"));
    expect(fn).toHaveBeenCalledWith("final");
  });

  it("calls action handlers", () => {
    const fn = jest.fn();
    render(
      <SavedViewMenu
        views={views}
        currentId="final"
        onSelect={jest.fn()}
        onRename={fn}
        onDelete={fn}
        onDuplicate={fn}
        onSetDefault={fn}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getAllByTitle("Đổi tên")[0]);
    expect(fn).toHaveBeenCalled();
  });
});
