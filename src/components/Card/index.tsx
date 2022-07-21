import React, { HTMLAttributes } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: Props) {
  return <div className={cn(className, styles.card)} {...props} />;
}
