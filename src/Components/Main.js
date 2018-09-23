import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Posts, Background, Projects, AboutMe, TypingIntro } from '../Components'

export default class Main extends Component {
  render() {
    return (
      <div id="MainView">
        <div id="typingContainer">
          <TypingIntro />
          <div className="animated infinite pulse delay-2s"><Icon name="angle double down" size="massive" style={{ opacity: 0.5 }} /></div>
        </div>
        <AboutMe />
        <Projects />
        <Background />
        <Posts />
      </div>
    )
  }
}