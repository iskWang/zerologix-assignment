import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Button } from "./Button";
import { describe, it, expect, vi } from "vitest";
import styles from "./Button.module.scss";

describe("Button", () => {
  it("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary variant styles by default", () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByText("Primary Button");
    expect(button).toHaveClass(styles.primary);
  });

  it("applies secondary variant styles when specified", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText("Secondary Button");
    expect(button).toHaveClass(styles.secondary);
  });

  it("renders as a link when href is provided", () => {
    render(
      <BrowserRouter>
        <Button href="/some-path">Link Button</Button>
      </BrowserRouter>
    );
    const link = screen.getByRole("link", { name: "Link Button" });
    expect(link).toHaveAttribute("href", "/some-path");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);

    await user.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText("Disabled Button")).toBeDisabled();
  });

  it("merges custom className with default styles", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByText("Custom Button");
    expect(button).toHaveClass("custom-class");
  });
});
