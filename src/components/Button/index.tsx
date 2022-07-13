import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

type Props = {
  variant?: "default" | "outlined" | "transparent";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "default",
  className = "",
  ...props
}: Props) {
  return <button {...props} className={`${variant} ${className}`} />;
}
