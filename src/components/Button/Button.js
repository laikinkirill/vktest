import React from "react";
import styles from "./Button.module.scss";

function Button(props) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Button;
