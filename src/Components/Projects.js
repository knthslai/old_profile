import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import textComponent from "./TextComponents"

export default class Projects extends Component {
  render() {
    return (
      <div className="subView">
        <div id="Projects">
          <ScrollAnimation animateIn='flipInY'
            animateOut='flipOutY'>
            <div className="sectionTitle"><a> - Projects  - </a></div>
          </ScrollAnimation>
          {textComponent.projects.map((project, idx) => {
            return (
              <div key={idx} className="projectSection">

                <div className="projectImgDiv">
                  <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutLeft"><img alt="project.img" src={require(`../imgs/${project.img}`)} />
                  </ScrollAnimation>
                </div>
                <div className="projectInfo">
                  <ScrollAnimation animateIn="slideInRight" animateOut="slideOutRight">
                    {
                      Object.keys(project).map(key => {
                        return (
                          <ScrollAnimation key={key} animateIn="flipInX" animateOut="flipOutX">
                            <div className="projectLine" >
                              <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                              <p>{project[key]}</p>
                            </div>
                          </ScrollAnimation>
                        )
                      })
                    }
                  </ScrollAnimation>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}