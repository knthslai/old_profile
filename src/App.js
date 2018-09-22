import React, { Component } from 'react';
import './App.css';
import { ConsoleWindow, NavBar, Main } from './Components';


class App extends Component {
  constructor() {
    super()
    this.state = {
      mobileView: window.innerWidth <= 600,
      mainLoad: false
    }
  }
  componentDidMount() {
    window.addEventListener(`resize`, this.resize);
    document.getElementById(`console-window`).style.animation = `fadein 2s forwards`
  }
  resize = () => {
    this.setState({ mobileView: window.innerWidth <= 600 });
  }
  newState() {
    this.setState({ mainLoad: true });
  }
  render() {
    // console.log(`Mobile Mode: `, this.state.mobileView)
    return (
      <div className="App">
        <ConsoleWindow mobile={this.state.mobileView} newState={this.newState.bind(this)} />
        <NavBar mobile={this.state.mobileView} mobileView={this.state.mobileView} />
        {this.state.mainLoad &&
          <Main />
        }
        <img alt="BGGif" id="bg-gif" src={require(`./profileBGGif.gif`)} />
      </div>
    );
  }
}

export default App;
