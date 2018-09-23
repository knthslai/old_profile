import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class AboutMe extends Component {
  render() {
    return (
      <div className="subView">
        <div id="AboutMe">
          <ScrollAnimation animateIn='zoomInUp'
            animateOut='zoomOutUp'>
            <a>About me Section</a>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}