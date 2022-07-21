import React, { HTMLAttributes } from "react";
import cn from "clsx";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import { ReactComponent as TrashIcon } from "../../icons/trash.svg";

type Props = {
  onEditClick: () => void;
  onDeleteClick: () => void;
  title: string;
} & HTMLAttributes<HTMLButtonElement>;

export function Row({
  className,
  title,
  onEditClick,
  onDeleteClick,
  ...props
}: Props) {
  return (
    <button className={cn(className, styles.row)} {...props}>
      <span className={styles.name}>{title}</span>
      <div className={styles["button-container"]}>
        <Button
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            onEditClick();
          }}
        >
          Editar
        </Button>
        <Button
          variant="outlined"
          style={{ marginLeft: 10 }}
          onClick={(e) => {
            e.stopPropagation();
            onDeleteClick();
          }}
        >
          <TrashIcon className={styles.icon} />
        </Button>
      </div>
    </button>
  );
}
