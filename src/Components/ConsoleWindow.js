import React, { Component } from 'react';
import Typing from 'react-typing-animation'
import { Input, Button } from 'semantic-ui-react'
import textComponent from "./TextComponents"

class ConsoleWindow extends Component {
  constructor() {
    super()
    this.state = {
      currInput: ``
    }
  }
  // handleChange = (e) => {
  //   this.setState({ currInput: e.target.value })
  // }
  handleSubmit = (e) => {
    const consRef = document.getElementsByClassName("console-typing")
    const aRef = document.createElement("a");
    const inputTxt = document.createTextNode(document.getElementById("consoleInputVal").value);
    aRef.appendChild(inputTxt);
    consRef[0].appendChild(aRef)
  }
  render() {
    const initInputs = [...textComponent.inputs]
    return (
      <div id="console-window">
        <Typing className="console-typing" speed={35}>
          {` `}
          <Typing.Delay ms={1500} />
          {
            initInputs.map((str, idx) => {
              return (
                <a key={str + idx}>
                  {str}<br />
                  <Typing.Delay ms={1000} />
                </a>)
            })
          }
          <Typing.Delay ms={10000 * 10000} />
        </Typing>
      </div>
    )
  }
}
export default ConsoleWindow