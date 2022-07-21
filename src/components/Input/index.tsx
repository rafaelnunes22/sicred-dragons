import { InputHTMLAttributes } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return <input className={cn(className, styles.input)} {...props} />;
}
