import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Posts extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Posts">
          <ScrollAnimation animateIn='zoomInUp'
            animateOut='zoomOutUp'>
            <a>Posts Section</a>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}