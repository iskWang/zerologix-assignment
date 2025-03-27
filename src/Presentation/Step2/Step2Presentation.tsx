import styles from "./Step2Presentation.module.scss";
import FileUpload from "@/Component/FileUpload";
import Button from "@/Component/Button";

export const Step2Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Step 2: Document Upload</h1>

        <div className={styles.formContainer}>
          <FileUpload
            name="ID Card Front"
            maxSize={5 * 1024 * 1024} // 5MB
          />
          <FileUpload
            name="ID Card Back"
            maxSize={5 * 1024 * 1024} // 5MB
          />
          <FileUpload
            name="Additional Documents"
            maxSize={10 * 1024 * 1024} // 10MB
          />
        </div>

        <div className={styles.navigation}>
          <Button href="/step-1" className={styles.backButton}>
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

export default Step2Presentation;
