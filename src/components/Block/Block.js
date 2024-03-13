import React from "react";
import styles from "./Block.module.scss";

function Block(props) {
  return <div className={styles.block}>{props.children}</div>;
}

export default Block;
