import React, { HTMLAttributes } from "react";
import "./styles.scss";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function Heading(props: Props) {
  return <h1 className="heading" {...props}/>
}
