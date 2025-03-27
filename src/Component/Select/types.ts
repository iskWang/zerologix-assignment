export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  name?: string;
  options?: SelectOption[];
  value?: SelectOption;
  onChange?: (option: SelectOption) => void;
  error?: string;
  className?: string;
  placeholder?: string;
};
