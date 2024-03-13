import React from "react";
import styles from "./SecondBlock.module.scss";

function SecondBlock() {
  const getInfo = () => {
    fetch("https://api.agify.io/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  getInfo();

  return (
    <form className={styles.form}>
      <input type="text" />
      <input type="submit" />
    </form>
  );
}

export default SecondBlock;
