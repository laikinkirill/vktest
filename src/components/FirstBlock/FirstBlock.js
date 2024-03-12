import React, { useState } from "react";
import styles from "./FirstBlock.module.scss";

function FirstBlock() {
  const [fact, setFact] = useState("Some text...");

  const getFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.fact);
        setFact(data.fact);
      });
  };

  const focusHandler = (e) =>
    e.currentTarget.setSelectionRange(
      e.currentTarget.value.split(" ")[0].length,
      e.currentTarget.value.split(" ")[0].length,
      console.log(e.currentTarget.value.split(" ")[0])
    );

  return (
    <div className={styles.FirstBlock}>
      <textarea
        className={styles.factInfo}
        value={fact}
        ref={(ref) => ref && ref.focus()}
        onFocus={focusHandler}
      />
      <button className={styles.button} onClick={getFact}>
        Find fact
      </button>
    </div>
  );
}

export default FirstBlock;
