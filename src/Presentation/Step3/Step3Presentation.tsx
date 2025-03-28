import StepIndicator from "@/Component/StepIndicator";
import styles from "./Step3Presentation.module.scss";
import Button from "@/Component/Button";

export const Step3Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StepIndicator currentStep={3} />

        {/* Preview content will be added here */}
        <div className={styles.formContainer}>
          <p>Preview content will be added here</p>
        </div>

        <div className={styles.navigation}>
          <Button href="/step-2" className={styles.backButton}>
            Previous Step
          </Button>
          <Button href="/step-3" className={styles.nextButton}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step3Presentation;
