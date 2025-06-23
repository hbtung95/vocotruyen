import { render, screen, fireEvent } from "@testing-library/react";
import ImpersonateSwitch from "./ImpersonateSwitch";

describe("ImpersonateSwitch", () => {
  it("renders banner with impersonated and admin names", () => {
    render(<ImpersonateSwitch impersonatedName="B" adminName="A" onReturnToAdmin={() => {}} />);
    expect(screen.getByText(/Đang đăng nhập với quyền/i)).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("triggers callback when return button is clicked", () => {
    const mockFn = jest.fn();
    render(<ImpersonateSwitch impersonatedName="B" onReturnToAdmin={mockFn} />);
    fireEvent.click(screen.getByRole("button", { name: /Trở về admin/i }));
    expect(mockFn).toHaveBeenCalled();
  });

  it("does not render if showBanner is false", () => {
    render(<ImpersonateSwitch impersonatedName="B" onReturnToAdmin={() => {}} showBanner={false} />);
    expect(screen.queryByRole("alert")).toBeNull();
  });
});
