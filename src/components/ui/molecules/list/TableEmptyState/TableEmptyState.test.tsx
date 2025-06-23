import { render, screen } from "@testing-library/react";
import TableEmptyState from "./TableEmptyState";

describe("TableEmptyState", () => {
  it("renders default message", () => {
    render(<TableEmptyState />);
    expect(screen.getByText("Không có dữ liệu")).toBeInTheDocument();
  });

  it("renders custom title, description, icon, action", () => {
    render(
      <TableEmptyState
        title="Chưa có VĐV"
        description="Hãy thêm mới VĐV cho giải đấu."
        icon="🏆"
        action={<button>Thêm VĐV</button>}
      />
    );
    expect(screen.getByText("Chưa có VĐV")).toBeInTheDocument();
    expect(screen.getByText("Hãy thêm mới VĐV cho giải đấu.")).toBeInTheDocument();
    expect(screen.getByText("🏆")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Thêm VĐV" })).toBeInTheDocument();
  });
});
