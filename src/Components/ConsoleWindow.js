import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import TypingInput from './Typing';

class ConsoleWindow extends Component {
  submitMessage = (str) => {
    const newStr = document.createElement(`div`)
    newStr.appendChild(document.createTextNode(`> ${str}`))
    newStr.classList.add(`hideMe`)
    document.getElementById(`console-display`).appendChild(newStr)
  }
  render() {
    return (
      <div id="console-window">
        <div id="console-header"><h3> Kenneth Lai - </h3><a>Web Developer</a><Icon name="window close outline" size="large" /></div>
        <div id="console-display"></div>
        <div id="console-input">
          <TypingInput submitMessage={this.submitMessage} />
        </div>
      </div >
    )
  }
}
export default ConsoleWindow