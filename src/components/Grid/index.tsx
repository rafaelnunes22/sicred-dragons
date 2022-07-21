import { HTMLAttributes, ReactElement } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";

type Props = {
  children: ReactElement | ReactElement[];
} & HTMLAttributes<HTMLDivElement>;

export function Grid({ children, className }: Props) {
  return (
    <div role="grid" className={cn(className, styles.grid)}>
      <div className={styles["grid-item"]}>{children}</div>
    </div>
  );
}
