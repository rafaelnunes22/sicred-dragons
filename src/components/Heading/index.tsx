import React, { HTMLAttributes } from "react";
import "./styles.scss";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function Heading({ className = "", ...props }: Props) {
  return <h1 className={`heading ${className}`} {...props} />;
}
