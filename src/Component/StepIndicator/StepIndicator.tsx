import cx from "classnames";
import { Step, StepIndicatorProps } from "./types";
import styles from "./styles.module.scss";

const STEPS = [
  { step: 1 as Step, label: "Basic Info" },
  { step: 2 as Step, label: "Document Upload" },
  { step: 3 as Step, label: "Preview" },
] as const;

const StepIndicator = ({ currentStep, className }: StepIndicatorProps) => {
  const getStepStatus = (step: Step) => {
    if (step < currentStep) return "completed";
    if (step === currentStep) return "current";
    return "upcoming";
  };

  return (
    <div
      className={cx(styles.container, className)}
      data-testid="step-indicator"
    >
      {STEPS.map(({ step, label }) => {
        const status = getStepStatus(step);
        return (
          <div key={step} className={styles.step} data-testid={`step-${step}`}>
            <div className={cx(styles.circle, styles[status])}>{step}</div>
            <span className={cx(styles.label, styles[status])}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
