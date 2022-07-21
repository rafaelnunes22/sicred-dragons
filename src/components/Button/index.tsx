import { ButtonHTMLAttributes } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = {
  variant?: "default" | "outlined" | "transparent";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "default", className, ...props }: Props) {
  return (
    <button
      className={cn(className, styles.button, {
        [styles["-default"]]: variant === "default",
        [styles["-outlined"]]: variant === "outlined",
        [styles["-transparent"]]: variant === "transparent",
      })}
      {...props}
    />
  );
}
