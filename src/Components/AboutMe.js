import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import textComponent from "./TextComponents"

export default class AboutMe extends Component {
  render() {

    return (
      <div className="subView">
        <div id="AboutMe">
          <ScrollAnimation animateIn='flipInY'
            animateOut='flipOutY'>
            <div className="sectionTitle"><a> - About me  - </a></div>
          </ScrollAnimation>
          {textComponent.aboutMe.map((ele, idx) => {
            let direction = `Left`
            if (idx % 2 === 0) direction = `Right`
            return (
              <ScrollAnimation className={`textBox${direction}`} key={idx}
                animateIn={`fadeIn${direction}Big`}
                animateOut={`fadeOut${direction}Big`}
              >
                <img alt={ele.img[0]} src={require(`../imgs/${ele.img[0]}`)} />
                <p>{ele.text}</p>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    )
  }
}