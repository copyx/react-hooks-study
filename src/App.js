import React, { useState, useEffect } from 'react';
import './App.css';

import { useInput, useTabs, useTitle } from './hooks';

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

  return (
    <div className="App">
        <h1>Hello</h1>
      <div>
        <input placeholder="Name" {...name} />
      </div>
      <div>
        {sections.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
        <br />
        {currentItem.content}
      </div>
    </div>
  );
}

export default App;
