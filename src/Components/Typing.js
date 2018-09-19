import React, { Component } from 'react';
import Typing, { Delay, Reset } from 'react-typing-animation'
import textComponent from "./TextComponents"

export default class TypingInput extends Component {
  constructor() {
    super()
    this.state = {
      arrInput: [...textComponent.inputs],
      loadingPage: true,
      emptyInput: true
    }
  }

  render() {
    if (this.state.arrInput.length) {
      return (
        <Typing className="console-typing" loop={true} speed={35} onFinishedTyping={() => {
          const arrInput = [...this.state.arrInput]
          if (arrInput.length) {
            this.props.submitMessage(arrInput.shift())
          } else {
            this.setState({ loadingPage: false })
          }
          this.setState({ arrInput })
        }}>
          {this.state.arrInput[0]}
          <Delay ms={1000} />
          <Reset count={1} />
        </Typing >
      )
    } else {
      return (
        <div id="user-Input" >
          <div id="input-Field" />
          <div className="blinking-cursor">|</div>
        </div>
      )
    }
  }
}