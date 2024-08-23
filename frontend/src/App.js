import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("Initial Text");

  const getData = async () => {
    try {
      const response = await axios.get("/api");
      console.log(response);
      setText(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  const getHelloWorld = async () => {
    try {
      const response = await axios.get("https://sample-fern-app-server-o1aemqd25-manishmalliks-projects.vercel.app//hello");
      console.log(response);
      setText(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
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
          Learn React
        </a>
        {/* Click on button */}
        <button onClick={getData}>Get Data</button>
        <button onClick={getHelloWorld}>Click</button>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
