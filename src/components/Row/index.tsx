import React, { HTMLAttributes } from "react";
import { Button } from "../Button";
import { ReactComponent as TrashIcon } from "../../icons/trash.svg";
import "./styles.scss";

type Props = {
  onEditClick: () => void;
  onDeleteClick: () => void;
  title: string;
} & HTMLAttributes<HTMLButtonElement>;

export function Row({className, title, onEditClick, onDeleteClick, ...props}: Props) {
  return (
    <button className="row" {...props}>
      <span className="name">{title}</span>
      <div className="button-container">
        <Button variant="outlined" onClick={(e) => { e.stopPropagation(); onEditClick() }}>Editar</Button>
        <Button variant="outlined" style={{marginLeft: 10 }} onClick={(e) => { e.stopPropagation(); onDeleteClick() }}>
          <TrashIcon height={28} style={{padding: "0 10" }} />
          </Button>
      </div>
    </button>
  );
}