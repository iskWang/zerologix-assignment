export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  name?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
  placeholder?: string;
};
