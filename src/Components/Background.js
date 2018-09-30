import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Background extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Background">
          <ScrollAnimation animateIn='flipInY'
            animateOut='flipOutY'>
            <div className="sectionTitle"><a>Background </a></div>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}