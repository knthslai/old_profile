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
            let text = ele.text.split(`.`)
            return (
              <ScrollAnimation className={`textBox${direction}`} key={idx}
                animateIn={`fadeIn${direction}Big`}
                animateOut={`fadeOut${direction}Big`}
              >
                <img alt={ele.img[0]} src={require(`../imgs/${ele.img[0]}`)} />
                <div className="textColumn">
                  {
                    text.map((txt, idx) => {
                      if (txt.length) {
                        return (
                          <p key={idx}>
                            {txt}.
                        <br />
                          </p>
                        )
                      } else {
                        return null
                      }
                    })
                  }
                </div>
              </ScrollAnimation>
            )
          })}
          <ScrollAnimation className="textPara" animateIn='flipInY'
            animateOut='flipOutY'>
            <p>I have found my love for programming very naturally when serving up database queries. </p><p>As well as anything in between that and launching projects to a functional state. </p><p>I currently specialize in full stack development with JavaScript integrations here in NYC.</p>
          </ScrollAnimation>
        </div>
      </div>
    )
  }
}