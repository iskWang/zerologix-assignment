import { Link } from "react-router-dom";
import styles from "./Step1Presentation.module.scss";

export const Step1Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Step 1: Basic Information</h1>

        {/* Form will be added here */}
        <div className={styles.formContainer}>
          <p>Form content will be added here</p>
        </div>

        <div className={styles.navigation}>
          <Link to="/step-2" className={styles.nextButton}>
            Next Step
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step1Presentation;
