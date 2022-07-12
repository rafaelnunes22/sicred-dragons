
import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

type Props = { variant: "default" | "outlined" } & ButtonHTMLAttributes<HTMLButtonElement> ;

export function Button({ variant="default", ...props}: Props) {
  return <button  {...props} className={variant}/>
}