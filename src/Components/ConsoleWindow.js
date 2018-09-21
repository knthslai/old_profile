import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import TypingInput from './Typing';
import anime from "animejs"


class ConsoleWindow extends Component {
  constructor() {
    super()
    this.state = {
      secretNum: Math.random(9) * Date.now(),
    }
  }
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
    const secretNum = this.state.secretNum
    const mobileView = this.props.mobileView
    return function (str) {
      const consWin = document.getElementById(`console-window`)
      const consoleRef = document.getElementById(`console-display`)
      const newStr = document.createElement(`div`);
      let inputStr = str
      if (str === secretNum) {
        inputStr = `---Loaded Successfully---`
        newStr.style.color = `lightgreen`
        addWaitingLine(3000)
        waiting = true
      } else {
        if (waiting) {
          document.getElementById(`waiting-Text`).remove()
          addWaitingLine(5000)
          waiting = false
          //Loading Content
        } else if (inputStr.slice(0, 4) === `Load`) {
          const divId = inputStr.slice(5)
          const splitIdx = divId.indexOf(`:`)
          const divName = divId.slice(0, splitIdx)
          const direction = divId.slice(splitIdx + 1)
          inputStr = `Loading: ${divName} ...`
          if (divName === `nav-Bar` && mobileView) {
            const nodeList = document.getElementsByClassName(`nav-item`)
            let i
            for (i = 0; i < nodeList.length; i++) {
              nodeList[i].classList.add(`slide${i}`)
              nodeList[i].childNodes.forEach((node, idx) => idx ? node.remove() : null)
            }
            setTimeout(() => {
              let time = 0
              const timeline = anime.timeline({ easing: `easeOutExpo`, })
              timeline.add({
                targets: `.nav-item.slide0`,
                translateX: 365,
                duration: 3000,
                offset: time
              })
              time += 1000
              for (let j = 1; j < i; j++) {
                timeline.add({
                  targets: `.nav-item.slide${j}`,
                  translateX: [{ value: 365 }, { value: 365 }],
                  translateY: [{ value: 0 }, { value: -200 }],
                  duration: 10000,
                  offset: time
                })
                time += 1000
              }
            }, 1000
            )
          } else { document.getElementById(divName).classList.add(`slide${direction}`) }
          setTimeout(() => {
            document.getElementById(str).innerText += ` Complete`
            if (consWin) {
              setTimeout(() => consWin.remove(), 10000)
            }
          }, 2000)

        }
        newStr.style.color = `rgb(255, 255, 116)`
      }

      newStr.id = str
      newStr.appendChild(document.createTextNode(`> ${inputStr}`))
      consoleRef.appendChild(newStr)

      setTimeout(() => {
        const textEntry = document.getElementById(str)
        if (textEntry) {
          textEntry.remove()
        }
      }, 10000)

      function addWaitingLine(time) {
        setTimeout(() => {
          const waitingStr = document.createElement(`div`);
          waitingStr.appendChild(document.createTextNode(`> Waiting for user input...`))
          waitingStr.style.color = `lightblue`
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
        <div id="console-header"><h3> Kenneth Lai - Web Developer</h3><Icon name="window close outline" size="large" /></div>
        <div id="console-display" />
        <div id="console-input">
          <TypingInput secretNum={this.state.secretNum} submitMessage={submitMessage} />
        </div>
      </div >
    )
  }
}
export default ConsoleWindow