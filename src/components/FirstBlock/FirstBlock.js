import React, { useState } from "react";
import styles from "./FirstBlock.module.scss";
import Button from "../../components/Button/Button";

function FirstBlock() {
  const [fact, setFact] = useState("");

  const getFact = (event) => {
    event.preventDefault();
    fetch("https://catfact.ninja/fact")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFact(data.fact);
      });
  };

  const focusHandler = (e) =>
    e.currentTarget.setSelectionRange(
      e.currentTarget.value.split(" ")[0].length,
      e.currentTarget.value.split(" ")[0].length
    );

  return (
    <>
      <textarea
        className={styles.factInfo}
        value={fact}
        ref={(ref) => ref && ref.focus()}
        onFocus={focusHandler}
        placeholder="Some text..."
      />
      <Button onClick={getFact} value="Find fact" />
    </>
  );
}

export default FirstBlock;
