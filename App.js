import logo from './logo.svg';
import './App.css';
import React from "react";
{/*import House from './component/firstpg';*/}
{/*import Welcome from './component/second.js';*/}
{/*import Nature from './component/third';*/}
import Love from './component/fourth';
function App() {
  return (
    <div className="App">
      {/*<House/>*/}
      {/*<Nature/>*/}
      <Love/>

      {/*<House trademark="mai hoo khalnayak"/>*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          {/*<Welcome name="shivam"/>*/}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
