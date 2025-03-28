import { useNavigate } from "react-router-dom";

import styles from "./Step1Presentation.module.scss";
import Input from "@/Component/Input";
import DatePicker from "@/Component/DatePicker";
import Select from "@/Component/Select";
import Button from "@/Component/Button";
import StepIndicator, { StepEnum } from "@/Component/StepIndicator";
import { useKYCFormContext } from "@/Container/KYCFormContainer";
import nationalityJson from "@/Lib/nationality.json";

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Prefer not to say", value: "unspecified" },
];

const nationalityOptions = Object.entries(nationalityJson).map(
  ([value, label]) => ({ value, label })
);

export const Step1Presentation = () => {
  const navigate = useNavigate();
  const { setFormData, basicInfoForm } = useKYCFormContext();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = basicInfoForm;

  const onSubmit = handleSubmit((data) => {
    setFormData({
      basicInfo: data,
    });
    navigate("/step-2");
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StepIndicator currentStep={StepEnum.NOT_STARTED} />

        <form onSubmit={onSubmit}>
          <div className={styles.formContainer}>
            <Input {...register("name")} error={errors.name?.message} />
            <Input {...register("email")} error={errors.email?.message} />
            <Input {...register("phone")} error={errors.phone?.message} />
            <Input {...register("address")} error={errors.address?.message} />
            <Select
              name="Nationality"
              options={nationalityOptions}
              value={basicInfoForm.watch("nationality")}
              onChange={(value) => {
                setValue("nationality", value, { shouldValidate: true });
              }}
              error={errors.nationality?.message}
            />
            <Select
              name="Gender"
              options={genderOptions}
              value={basicInfoForm.watch("gender")}
              onChange={(value) => {
                setValue("gender", value, { shouldValidate: true });
              }}
              error={errors.gender?.message}
            />
            <DatePicker
              {...register("dateOfBirth")}
              value={basicInfoForm.watch("dateOfBirth")}
              label="Date of Birth"
              error={errors.dateOfBirth?.message}
            />
          </div>

          <div className={styles.navigation}>
            <Button type="submit" className={styles.nextButton}>
              Next Step
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1Presentation;
