
import { ReactElement } from "react";
import "./styles.scss";

type Props = {
  children: ReactElement | ReactElement[];
};

export function Grid({ children }: Props) {
  return <div role="grid" className="grid" >
    <div className="grid-item">
      {children}
    </div>
  </div>
}