import styles from "./Step1Presentation.module.scss";
import Input from "@/Component/Input";
import DatePicker from "@/Component/DatePicker";
import Select from "@/Component/Select";
import { Button } from "@/Component/Button";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Prefer not to say", value: "unspecified" },
];

export const Step1Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Step 1: Basic Information</h1>

        <div className={styles.formContainer}>
          <Input name="Name" />
          <Input name="Email" />
          <Input name="Phone" />
          <Select name="Nationality" />
          <Select name="Gender" options={genderOptions} />
          <Input name="Address" />
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
