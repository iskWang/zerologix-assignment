import styles from "./Step1Presentation.module.scss";
import Input from "@/Component/Input";
import DatePicker from "@/Component/DatePicker";
import Select from "@/Component/Select";
import StepIndicator from "@/Component/StepIndicator";
import Button from "@/Component/Button";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Prefer not to say", value: "unspecified" },
];

export const Step1Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StepIndicator currentStep={1} />

        <div className={styles.formContainer}>
          <Input name="Name" />
          <Input name="Email" />
          <Input name="Phone" />
          <Input name="Address" />
          <Select name="Nationality" />
          <Select name="Gender" options={genderOptions} />

          <DatePicker name="Date of Birth" />
        </div>

        <div className={styles.navigation}>
          <Button href="/step-2" className={styles.nextButton}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step1Presentation;
