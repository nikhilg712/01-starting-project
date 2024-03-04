import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  const [startingText, setstartingText] = useState("");

  function handleClick(selectedButton) {
    setstartingText(selectedButton);
  }

  let tabContent = <p>Please click a button</p>;

  if (startingText) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[startingText].title}</h3>
        <p>{EXAMPLES[startingText].description}</p>
        <pre>
          <code>{EXAMPLES[startingText].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h1>Examples</h1>
      <menu>
        <TabButton
          isSelected={startingText === "Components"}
          onSelect={() => handleClick("Components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={startingText === "JSX"}
          onSelect={() => handleClick("JSX")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={startingText === "Props"}
          onSelect={() => handleClick("Props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={startingText === "State"}
          onSelect={() => handleClick("State")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
