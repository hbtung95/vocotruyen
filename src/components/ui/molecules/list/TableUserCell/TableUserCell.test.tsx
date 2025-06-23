import { render, screen } from "@testing-library/react";
import TableUserCell from "./TableUserCell";

const users = [
  { id: "a", name: "Nguyễn Văn A", avatar: "", email: "a@email.com", role: "Admin", status: "active" },
  { id: "b", name: "Lê Thị B", avatar: "", email: "b@email.com", role: "User", status: "offline" },
  { id: "c", name: "Trần Văn C", avatar: "", email: "c@email.com", role: "Editor", status: "inactive" },
];

describe("TableUserCell", () => {
  it("renders user info", () => {
    render(<TableUserCell users={users} showEmail showRole />);
    expect(screen.getByText("Nguyễn Văn A")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });

  it("renders status dot", () => {
    render(<TableUserCell users={users} />);
    expect(screen.getAllByTitle("active")[0]).toBeInTheDocument();
  });

  it("renders more box if users > max", () => {
    render(<TableUserCell users={users} max={2} />);
    expect(screen.getByText("+1")).toBeInTheDocument();
  });

  it("renders nothing if no user", () => {
    render(<TableUserCell users={[]} />);
    expect(screen.queryByTestId("table-user-cell")).toBeNull();
  });
});
