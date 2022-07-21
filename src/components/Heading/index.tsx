import React, { HTMLAttributes } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function Heading({ className, ...props }: Props) {
  return <h1 className={cn(className, styles.heading)} {...props} />;
}
