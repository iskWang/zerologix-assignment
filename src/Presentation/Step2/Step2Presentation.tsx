import { useNavigate } from "react-router-dom";
import styles from "./Step2Presentation.module.scss";
import FileUpload from "@/Component/FileUpload";
import Button from "@/Component/Button";
import StepIndicator, { StepEnum } from "@/Component/StepIndicator";
import { useKYCFormContext } from "@/Container/KYCFormContainer";

export const Step2Presentation = () => {
  const navigate = useNavigate();
  const { setFormData, documentsForm } = useKYCFormContext();
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = documentsForm;

  const onSubmit = handleSubmit((data) => {
    if (Object.keys(errors).length === 0) {
      setFormData({
        documents: data,
      });
      navigate("/step-3");
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StepIndicator currentStep={StepEnum.IN_PROGRESS} />

        <form onSubmit={onSubmit}>
          <div className={styles.formContainer}>
            <FileUpload
              label="ID Card Front"
              maxSize={5 * 1024 * 1024}
              value={documentsForm.watch("idCardFront")}
              onChange={(file) =>
                setValue("idCardFront", file, {
                  shouldValidate: true,
                })
              }
              error={errors.idCardFront?.message}
            />
            <FileUpload
              label="ID Card Back"
              maxSize={5 * 1024 * 1024}
              value={documentsForm.watch("idCardBack")}
              onChange={(file) =>
                setValue("idCardBack", file, {
                  shouldValidate: true,
                })
              }
              error={errors.idCardBack?.message}
            />
            <FileUpload
              label="Additional Documents"
              maxSize={10 * 1024 * 1024}
              multiple
              value={documentsForm.watch("additionalDoc")}
              onChange={(files) =>
                setValue("additionalDoc", Array.isArray(files) ? files : null, { shouldValidate: true })
              }
              error={errors.additionalDoc?.message}
            />
          </div>

          <div className={styles.navigation}>
            <Button
              type="button"
              onClick={() => navigate("/step-1")}
              className={styles.backButton}
            >
              Previous Step
            </Button>
            <Button type="submit" className={styles.nextButton}>
              Next Step
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2Presentation;
