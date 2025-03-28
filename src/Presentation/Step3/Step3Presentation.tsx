import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import StepIndicator, { StepEnum } from "@/Component/StepIndicator";
import styles from "./Step3Presentation.module.scss";
import Button from "@/Component/Button";
import { useKYCFormContext } from "@/Container/KYCFormContainer";

const PreviewField = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.field}>
    <label>{label}</label>
    <p>{value}</p>
  </div>
);

const FilePreview = ({ label, files }: { label: string; files: File[] }) => (
  <div className={styles.field}>
    <label>{label}</label>
    <div className={styles.fileList}>
      {files.map((file, index) => (
        <p key={`${file.name}-${index}`}>{file.name}</p>
      ))}
    </div>
  </div>
);

export const Step3Presentation = () => {
  const navigate = useNavigate();
  const { formData } = useKYCFormContext();
  const { basicInfo, documents } = formData;

  const handleSubmit = () => {
    // TODO: Submit form data to backend
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StepIndicator currentStep={StepEnum.COMPLETED} />

        <div className={styles.formContainer}>
          <section className={styles.section}>
            <h2>Basic Information</h2>
            <PreviewField label="Name" value={basicInfo.name} />
            <PreviewField label="Email" value={basicInfo.email} />
            <PreviewField label="Phone" value={basicInfo.phone} />
            <PreviewField label="Address" value={basicInfo.address} />
            <PreviewField label="Nationality" value={basicInfo.nationality} />
            {basicInfo.gender && (
              <PreviewField label="Gender" value={basicInfo.gender} />
            )}
            <PreviewField
              label="Date of Birth"
              value={format(basicInfo.dateOfBirth, "PPP")}
            />
          </section>

          <section className={styles.section}>
            <h2>Documents</h2>
            {documents.idCardFront && (
              <FilePreview
                label="ID Card Front"
                files={Array.isArray(documents.idCardFront) ? documents.idCardFront : [documents.idCardFront]}
              />
            )}
            {documents.idCardBack && (
              <FilePreview
                label="ID Card Back"
                files={Array.isArray(documents.idCardBack) ? documents.idCardBack : [documents.idCardBack]}
              />
            )}
            {documents.additionalDoc && Array.isArray(documents.additionalDoc) && documents.additionalDoc.length > 0 && (
              <FilePreview
                label="Additional Documents"
                files={documents.additionalDoc}
              />
            )}
          </section>
        </div>

        <div className={styles.navigation}>
          <Button
            type="button"
            onClick={() => navigate("/step-2")}
            className={styles.backButton}
          >
            Previous Step
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step3Presentation;
