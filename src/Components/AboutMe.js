import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import textComponent from "./TextComponents"

export default class AboutMe extends Component {
  render() {

    return (
      <div className="subView">
        <div id="AboutMe">
          <ScrollAnimation animateIn='zoomInUp'
            animateOut='zoomOutUp'>
            <a>About me Section</a>
          </ScrollAnimation>
          {textComponent.aboutMe.map((ele, idx) => {
            let direction = `Left`
            if (idx % 2 === 0) direction = `Right`
            return (
              <ScrollAnimation className={`textBox${direction}`} key={idx}
                animateIn={`fadeIn${direction}Big`}
                animateOut={`fadeOut${direction}Big`}
              >
                <img src={require(`../imgs/${ele.img[0]}`)} />
                <p>{ele.text}</p>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    )
  }
}