import { render, screen } from "@testing-library/react";
import StepIndicator from "./StepIndicator";
import { describe, it, expect } from "vitest";

describe("StepIndicator", () => {
  it("renders all steps with correct labels", () => {
    render(<StepIndicator currentStep={1} />);

    expect(screen.getByText("Basic Info")).toBeInTheDocument();
    expect(screen.getByText("Document Upload")).toBeInTheDocument();
    expect(screen.getByText("Preview")).toBeInTheDocument();
  });

  it("applies correct status classes for step 1", () => {
    render(<StepIndicator currentStep={1} />);

    // Step 1 should be current
    expect(
      screen.getByTestId("step-1").querySelector("[class*='current']")
    ).toBeTruthy();

    // Steps 2 and 3 should be upcoming
    expect(
      screen.getByTestId("step-2").querySelector("[class*='upcoming']")
    ).toBeTruthy();
    expect(
      screen.getByTestId("step-3").querySelector("[class*='upcoming']")
    ).toBeTruthy();
  });

  it("applies correct status classes for step 2", () => {
    render(<StepIndicator currentStep={2} />);

    // Step 1 should be completed
    expect(
      screen.getByTestId("step-1").querySelector("[class*='completed']")
    ).toBeTruthy();

    // Step 2 should be current
    expect(
      screen.getByTestId("step-2").querySelector("[class*='current']")
    ).toBeTruthy();

    // Step 3 should be upcoming
    expect(
      screen.getByTestId("step-3").querySelector("[class*='upcoming']")
    ).toBeTruthy();
  });

  it("applies correct status classes for step 3", () => {
    render(<StepIndicator currentStep={3} />);

    // Steps 1 and 2 should be completed
    expect(
      screen.getByTestId("step-1").querySelector("[class*='completed']")
    ).toBeTruthy();
    expect(
      screen.getByTestId("step-2").querySelector("[class*='completed']")
    ).toBeTruthy();

    // Step 3 should be current
    expect(
      screen.getByTestId("step-3").querySelector("[class*='current']")
    ).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<StepIndicator currentStep={1} className="custom-class" />);
    expect(screen.getByTestId("step-indicator")).toHaveClass("custom-class");
  });
});
