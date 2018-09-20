import React, { Component } from 'react';
import './App.css';
import { ConsoleWindow, NavBar, InfoBar } from './Components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ConsoleWindow />
        <NavBar />
        <InfoBar />
        <img id="bg-gif" src={require(`./profileBGGif.gif`)} />
      </div>
    );
  }
}

export default App;
