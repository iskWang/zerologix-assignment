import { Link } from "react-router-dom";
import styles from "./Step2Presentation.module.scss";

export const Step2Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Step 2: Document Upload</h1>

        {/* Upload form will be added here */}
        <div className={styles.formContainer}>
          <p>Upload form content will be added here</p>
        </div>

        <div className={styles.navigation}>
          <Link to="/step-1" className={styles.backButton}>
            Previous Step
          </Link>
          <Link to="/step-3" className={styles.nextButton}>
            Next Step
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step2Presentation;
