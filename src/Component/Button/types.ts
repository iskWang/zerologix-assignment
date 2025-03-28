import { ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "className"> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}
