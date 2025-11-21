import React from "react";
import InputBox from "./components/InputBox.jsx";
import OutputBox from "./components/OutputBox.jsx";
import { inputText } from "./data/inputText.js";
import { highlights } from "./data/highlights.js";

const App = () => {
  const handleClickPhrase = (id) => {
    const el = document.getElementById(`input-${id}`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // optional: brief flash effect
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 600);
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">Input–Output Scroll Mapping</h1>
      <p className="app-subtitle">
        Click on a highlighted phrase in the output (right) to scroll to its
        position in the input (left).
      </p>

      <div className="box-row">
        <InputBox text={inputText} highlights={highlights} />
        <OutputBox highlights={highlights} onClickPhrase={handleClickPhrase} />
      </div>
    </div>
  );
};

export default App;
