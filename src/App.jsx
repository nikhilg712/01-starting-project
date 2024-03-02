import Header from "./components/HEader.jsx";
import CoreConcept from "./components/coreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import {CORE_CONCEPTS,EXAMPLES} from "./data.js"
import { useState } from "react";



function App() {
  const [startingText,setstartingText] = useState('')
  let tabContent = <p>Please click a button</p> 
  function handleClick(selectedButton){
    setstartingText(selectedButton);
  }

  if(startingText)
  {
    tabContent = 
    <div id="tab-content">
    <h3>{EXAMPLES[startingText].title}</h3>
    <p>{EXAMPLES[startingText].description}</p>
    <pre>
      <code>
      {EXAMPLES[startingText].code}
      </code>
    </pre>
  </div>
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}  />
        <CoreConcept {...CORE_CONCEPTS[1]}  />
        <CoreConcept {...CORE_CONCEPTS[2]}  />
        <CoreConcept {...CORE_CONCEPTS[3]}  />
        </ul>
        </section>
        <section id="examples">
          <h1>Examples</h1>
          <menu>
            <TabButton isSelected = {startingText === 'Components'} onSelect={()=>handleClick('Components')}>Components</TabButton>
            <TabButton isSelected = {startingText === 'JSX'} onSelect={()=>handleClick('JSX')}>JSX</TabButton>
            <TabButton isSelected = {startingText === 'Props'} onSelect={()=>handleClick('Props')}>Props</TabButton>
            <TabButton isSelected = {startingText === 'State'} onSelect={()=>handleClick('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
