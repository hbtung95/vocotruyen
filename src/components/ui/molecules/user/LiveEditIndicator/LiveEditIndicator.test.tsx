import { render, screen } from "@testing-library/react";
import LiveEditIndicator from "./LiveEditIndicator";

const users = [
  { id: 1, name: "A", avatar: "/a.png" },
  { id: 2, name: "B", avatar: "/b.png" },
  { id: 3, name: "C", avatar: "/c.png" },
];

describe("LiveEditIndicator", () => {
  it("renders avatars and edit text", () => {
    render(<LiveEditIndicator users={users} />);
    expect(screen.getAllByRole("img").length).toBe(3);
    expect(screen.getByLabelText("Đang cùng chỉnh sửa")).toBeInTheDocument();
  });

  it("shows extra user count if too many", () => {
    render(<LiveEditIndicator users={[...users, { id: 4, name: "D", avatar: "/d.png" }]} maxVisible={2} />);
    expect(screen.getAllByRole("img").length).toBe(2);
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("renders nothing if no users", () => {
    const { container } = render(<LiveEditIndicator users={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("accepts custom tooltip", () => {
    render(<LiveEditIndicator users={users} tooltip="Đang edit" />);
    expect(screen.getByTitle("Đang edit")).toBeInTheDocument();
  });
});
