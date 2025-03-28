export enum StepEnum {
  NOT_STARTED = 1,
  IN_PROGRESS = 2,
  COMPLETED = 3,
}

export type Step =
  | StepEnum.NOT_STARTED
  | StepEnum.IN_PROGRESS
  | StepEnum.COMPLETED;

export type StepIndicatorProps = {
  currentStep: Step;
  className?: string;
};
