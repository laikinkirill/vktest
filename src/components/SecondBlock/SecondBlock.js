import React, { useState } from "react";
import styles from "./SecondBlock.module.scss";
import Button from "../../components/Button/Button";
import { apiService } from "../../service/api.service";

function SecondBlock() {
  const [inputName, setInputName] = useState("");

  const postName = async (event) => {
    event.preventDefault();

    let dataName = {
      name: inputName,
    };

    await apiService.createName(dataName);

    console.log(dataName);
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        name="name"
        className={styles.text}
        placeholder="Some text..."
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
      <div className={styles.age}>Your age: 25 years old</div>
      <Button onClick={postName} value="Send name" />
    </form>
  );
}

export default SecondBlock;
