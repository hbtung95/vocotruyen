import { render, screen, fireEvent } from "@testing-library/react";
import ListItemAction from "./ListItemAction";

describe("ListItemAction", () => {
  it("renders label and icon", () => {
    render(<ListItemAction label="Item" actions={<button>Do</button>} icon={<span>⭐</span>} />);
    expect(screen.getByText("Item")).toBeInTheDocument();
    expect(screen.getByText("⭐")).toBeInTheDocument();
  });

  it("renders description if provided", () => {
    render(<ListItemAction label="A" description="desc" actions={<button>Action</button>} />);
    expect(screen.getByText("desc")).toBeInTheDocument();
  });

  it("renders and calls action click", () => {
    const actionClick = jest.fn();
    render(<ListItemAction label="A" actions={<button>Action</button>} onActionClick={actionClick} />);
    fireEvent.click(screen.getByText("Action"));
    expect(actionClick).toHaveBeenCalled();
  });

  it("is disabled if disabled", () => {
    render(<ListItemAction label="Dis" actions={<button>Act</button>} disabled />);
    expect(screen.getByRole("button", { name: /Act/i })).toBeDisabled();
  });

  it("shows selected style", () => {
    render(<ListItemAction label="Sel" actions={<button>Go</button>} selected />);
    expect(screen.getByText("Sel").parentElement?.parentElement).toHaveClass("selected");
  });
});
