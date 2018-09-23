import React, { Component } from 'react';
import { Posts, Background, Projects, AboutMe, TypingIntro } from '../Components'

export default class Main extends Component {
  render() {
    return (
      <div id="MainView">
        <div id="typingContainer">
          <TypingIntro />
        </div>
        <AboutMe />
        <Projects />
        <Background />
        <Posts />
      </div>
    )
  }
}