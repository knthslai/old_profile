import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import TypingInput from './Typing';
import Anime from 'react-anime';

class ConsoleWindow extends Component {

  addTypingEventListener(submitMessage) {
    document.addEventListener(`keydown`, evt => {
      const inputField = document.getElementById(`input-Field`)

      if (inputField) {
        inputField.style.whiteSpace = `pre-wrap`
        const innerText = inputField.innerText

        if (evt.code.includes(`Key`) || evt.code === `Space`) {
          inputField.innerText += evt.key
        } else {

          switch (evt.code) {
            case `Backspace`:
              inputField.innerText = innerText.slice(0, -1)
              break
            case `Enter`:
              inputField.innerText = ``
              submitMessage(innerText)
              break
            default:
              break
          }
        }
      }
    })
  }

  preSubmitMessage = () => {
    let waiting = false

    return function (str) {
      const consoleRef = document.getElementById(`console-display`)
      const newStr = document.createElement(`div`);
      let inputStr = str

      if (str === `Loading Complete`) {
        addWaitingLine(250)
        waiting = true
      } else {
        if (waiting) {
          document.getElementById(`waiting-Text`).remove()
          addWaitingLine(5000)
          waiting = false
        } else if (inputStr.slice(0, 4) === `Load`) {
          inputStr = `Loading: ${inputStr.slice(5)}`
        }
      }

      newStr.id = str
      newStr.appendChild(document.createTextNode(`> ${inputStr}`))
      consoleRef.appendChild(newStr)
      setTimeout(() => document.getElementById(str).remove(), 10000)

      function addWaitingLine(time) {
        setTimeout(() => {
          const waitingStr = document.createElement(`div`);
          waitingStr.appendChild(document.createTextNode(`> Waiting for user input...`))
          waitingStr.id = `waiting-Text`
          consoleRef.appendChild(waitingStr)
        }, time)
      }
    }
  }

  render() {
    const submitMessage = this.preSubmitMessage()
    this.addTypingEventListener(submitMessage)
    return (
      <div id="console-window">
        <div id="console-header"><h3> Kenneth Lai - </h3><a>Web Developer</a><Icon name="window close outline" size="large" /></div>
        <div id="console-display"></div>
        <div id="console-input">
          <TypingInput submitMessage={submitMessage} />
        </div>
      </div >
    )
  }
}
export default ConsoleWindow