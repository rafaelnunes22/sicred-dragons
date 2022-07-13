import { InputHTMLAttributes } from "react";
import "./styles.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: Props) {
  return <input {...props} className={`input ${className}`} />;
}
