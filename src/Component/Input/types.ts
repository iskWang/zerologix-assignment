import { InputHTMLAttributes } from "react";

export type InputTypes = InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
  className?: string;
  error?: string;
};
