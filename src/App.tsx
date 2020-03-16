import React, { useState, MouseEvent } from "react";
import { Button } from "./component";

import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React TypeScript Storybook Starter</h1>
        <p>
          Sets up the basics with Eslint/Prettier, TypeScript, Storybook out of
          the box.
        </p>
        <h2>Packages Used:</h2>
        <ul>
          <li>
            Eslint
            <ul>
              <li>plugins = react and prettier</li>
              <li>configs = react and prettier</li>
            </ul>
          </li>
          <li>
            Prettier
            <ul>
              <li>
                Using recommended settings. No external config (AirBnb, etc)
              </li>
            </ul>
          </li>
          <li>
            React Testing Library
            <ul>
              <li>Includes extend-expect for jest-dom</li>
            </ul>
          </li>
          <li>
            Storybook
            <ul>
              <li>addon-knobs</li>
              <li>addon-accessibility</li>
              <li>addon-viewports</li>
            </ul>
          </li>
        </ul>
        <p></p>
        <h2>Sample Component</h2>
        <div>
          <Button type="button" onClick={handleClick} as="primary">
            Update Count
          </Button>
          <span>
            Current count is <span className="count">{count}</span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default App;
