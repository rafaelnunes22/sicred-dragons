import { HTMLAttributes, ReactElement } from "react";
import "./styles.scss";

type Props = {
  children: ReactElement | ReactElement[];
} & HTMLAttributes<HTMLDivElement>;

export function Grid({ children, className = "" }: Props) {
  return (
    <div role="grid" className={`grid ${className}`}>
      <div className="grid-item">{children}</div>
    </div>
  );
}
