import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FileUpload } from "./FileUpload";

describe("FileUpload", () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    label: "Upload File",
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders file upload button with correct label for single file", () => {
    render(<FileUpload {...defaultProps} />);
    expect(screen.getByText("Choose File")).toBeDefined();
  });

  it("renders file upload button with correct label for multiple files", () => {
    render(<FileUpload {...defaultProps} multiple />);
    expect(screen.getByText("Choose Files")).toBeDefined();
  });

  it("handles single file selection within size limit", () => {
    render(<FileUpload {...defaultProps} maxSize={1024 * 1024} />);

    const file = new File(["test"], "test.txt", { type: "text/plain" });
    const input = screen.getByTestId("file-input");

    fireEvent.change(input, { target: { files: [file] } });

    expect(mockOnChange).toHaveBeenCalledWith([file]);
    expect(screen.getByText("test.txt")).toBeDefined();
  });

  it("handles multiple file selection within size limit", () => {
    render(<FileUpload {...defaultProps} multiple maxSize={1024 * 1024} />);

    const files = [
      new File(["test1"], "test1.txt", { type: "text/plain" }),
      new File(["test2"], "test2.txt", { type: "text/plain" }),
    ];
    const input = screen.getByTestId("file-input");

    fireEvent.change(input, { target: { files } });

    expect(mockOnChange).toHaveBeenCalledWith(files);
    expect(screen.getByText("test1.txt")).toBeDefined();
    expect(screen.getByText("test2.txt")).toBeDefined();
  });

  it("handles file selection exceeding size limit", () => {
    const maxSize = 5;
    render(<FileUpload {...defaultProps} maxSize={maxSize} />);

    const file = new File(["test-content"], "large.txt", {
      type: "text/plain",
    });
    Object.defineProperty(file, "size", { value: maxSize + 1 });

    const input = screen.getByTestId("file-input");
    fireEvent.change(input, { target: { files: [file] } });

    expect(mockOnChange).toHaveBeenCalledWith(null);
  });

  it("handles file deletion", () => {
    render(<FileUpload {...defaultProps} />);

    const file = new File(["test"], "test.txt", { type: "text/plain" });
    const input = screen.getByTestId("file-input");

    // Upload file
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText("test.txt")).toBeDefined();

    // Delete file
    const deleteButton = screen.getByTestId("delete-button-0");
    fireEvent.click(deleteButton);

    expect(mockOnChange).toHaveBeenLastCalledWith(null);
    expect(screen.queryByText("test.txt")).toBeNull();
  });

  it("handles multiple file deletion", () => {
    render(<FileUpload {...defaultProps} multiple />);

    const files = [
      new File(["test1"], "test1.txt", { type: "text/plain" }),
      new File(["test2"], "test2.txt", { type: "text/plain" }),
    ];
    const input = screen.getByTestId("file-input");

    // Upload files
    fireEvent.change(input, { target: { files } });
    expect(screen.getByText("test1.txt")).toBeDefined();
    expect(screen.getByText("test2.txt")).toBeDefined();

    // Delete first file
    const deleteButton = screen.getByTestId("delete-button-0");
    fireEvent.click(deleteButton);

    expect(mockOnChange).toHaveBeenLastCalledWith([files[1]]);
    expect(screen.queryByText("test1.txt")).toBeNull();
    expect(screen.getByText("test2.txt")).toBeDefined();
  });

  it("shows error message when provided", () => {
    const errorMessage = "This field is required";
    render(<FileUpload {...defaultProps} error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeDefined();
  });

  it("handles empty file selection", () => {
    render(<FileUpload {...defaultProps} />);

    const input = screen.getByTestId("file-input");
    fireEvent.change(input, { target: { files: [] } });

    expect(mockOnChange).toHaveBeenCalledWith(null);
  });
});
