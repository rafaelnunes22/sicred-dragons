
import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

type Props = { 
  variant?: "default" | "outlined";
  size?: "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement> ;

export function Button({ variant="default", size="md", className, ...props}: Props) {
  return <button  {...props} className={`${variant} ${size} ${className}`}/>
}
