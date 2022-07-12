
import { InputHTMLAttributes } from "react";
import "./styles.scss";

type Props = InputHTMLAttributes<HTMLInputElement>;

function Input(props: Props) {
  return <input {...props} className="input"/>
}

export { Input };