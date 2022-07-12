import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> ;

export function IconButton(props: Props) {
  return <button className="icon-button" {...props}/>
}
