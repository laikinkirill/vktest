import "./App.css";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import SecondBlock from "./components/SecondBlock/SecondBlock";
import Block from "./components/Block/Block";

function App() {
  return (
    <>
      <Block>
        <FirstBlock />
      </Block>

      <Block>
        <SecondBlock />
      </Block>
    </>
  );
}

export default App;
