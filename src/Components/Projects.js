import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Projects extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Projects">
          <ScrollAnimation animateIn='flipInY'
            animateOut='flipOutY'>
            <div className="sectionTitle"><a> - Projects  - </a></div>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}