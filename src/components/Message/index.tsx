import React, { HTMLAttributes } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = {
  variant?: "default" | "error";
} & HTMLAttributes<HTMLHeadingElement>;

export function Message({ className, variant = "default", ...props }: Props) {
  return (
    <span
      className={cn(className, styles.message, {
        [styles["-error"]]: variant === "error",
      })}
      {...props}
    />
  );
}
