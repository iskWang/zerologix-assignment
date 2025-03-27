import { Link } from "react-router-dom";
import styles from "./Step3Presentation.module.scss";

export const Step3Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Step 3: Confirmation</h1>

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
