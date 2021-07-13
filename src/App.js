import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import { useInput, useTabs, useTitle, useClick, useHover } from './hooks';

const sections = [
  {
    tab: 'Section 1',
    content: 'Content 1',
  },
  {
    tab: 'Section 2',
    content: 'Content 2',
  }
];

function App() {
  const name = useInput("Mr.", value => value.length < 20);
  const { currentItem, changeItem } = useTabs(0, sections);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  const onClick = () => console.log("click!");
  const clickRef = useClick(onClick);

  const onHover = () => console.log("hover!")
  const hoverRef = useHover(onHover);

  return (
    <div className="App">
        <h1>React Hooks</h1>
      <div>
        <h2>useInput</h2>
        <input placeholder="Name" {...name} />
      </div>
      <div>
        <h2>useTabs</h2>
        {sections.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
        <br />
        {currentItem.content}
      </div>
      <div>
        <h2>useClick</h2>
        <span ref={clickRef}>Click here!!!</span>
      </div>
      <div>
        <h2>useHover</h2>
        <span ref={hoverRef}>Hover here!!!</span>
      </div>
    </div>
  );
}

export default App;
