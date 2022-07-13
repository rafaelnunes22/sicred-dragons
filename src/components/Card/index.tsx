import React, { HTMLAttributes } from "react";
import "./styles.scss";

type Props = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: Props) {
  return <div className={`card ${className}`} {...props} />;
}
