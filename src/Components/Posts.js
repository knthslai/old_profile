import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Posts extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Posts">
          <ScrollAnimation animateIn='flipInY'
            animateOut='flipOutY'>
            <div className="sectionTitle"><a> - Posts  - </a></div>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}