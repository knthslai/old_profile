import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Background extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Background">
          <ScrollAnimation animateIn='zoomInUp'
            animateOut='zoomOutUp'>
            <a>Background Section</a>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}