import { HTMLAttributes, ReactElement } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = {
  children: ReactElement | ReactElement[];
} & HTMLAttributes<HTMLDivElement>;

export function Grid({ children, className, ...props }: Props) {
  return (
    <div role="grid" className={cn(className, styles.grid)} {...props}>
      <div className={styles["grid-item"]}>{children}</div>
    </div>
  );
}
