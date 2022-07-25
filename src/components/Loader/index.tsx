import React from "react";
import styles from "./styles.module.scss";

export function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles.circle} />
    </div>
  );
}
