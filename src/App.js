import React, { Component } from 'react';
import './App.css';
import { ConsoleWindow, NavBar, InfoBar } from './Components';


class App extends Component {
  constructor() {
    super()
    this.state = {
      mobileView: false
    }
  }
  componentDidMount() {
    window.addEventListener(`resize`, this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({ mobileView: window.innerWidth <= 600 });
  }
  render() {
    return (
      <div className="App">
        <ConsoleWindow mobileView={this.state.mobileView} />
        <NavBar mobileView={this.state.mobileView} />
        {/* <InfoBar /> */}
        <img id="bg-gif" src={require(`./profileBGGif.gif`)} />
      </div>
    );
  }
}

export default App;
