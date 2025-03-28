import { Link } from "react-router-dom";
import StepIndicator from "@/Component/StepIndicator";
import styles from "./Step3Presentation.module.scss";

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
          <Link to="/step-2" className={styles.backButton}>
            Previous Step
          </Link>
          <button
            className={styles.submitButton}
            onClick={() => alert("Form submitted!")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3Presentation;
