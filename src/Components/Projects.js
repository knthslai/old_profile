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
                        let para = project[key]
                        if (key !== `img`) {
                          if (key === `keyPoints`) {
                            para = para.split(`.`)
                            para.splice(-1, 1)
                            return (
                              <ScrollAnimation key={key} animateIn="flipInX" animateOut="flipOutX">
                                <div className="projectLine" >
                                  <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                                  <p>{para.map(line => {
                                    return (
                                      <span key={line}>- {line} < br />< br /></span>)
                                  })}</p>
                                </div>
                              </ScrollAnimation>
                            )
                          } else {
                            return (
                              <ScrollAnimation key={key} animateIn="flipInX" animateOut="flipOutX">
                                <div className="projectLine" >
                                  <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                                  <p>{para}</p>
                                </div>
                              </ScrollAnimation>
                            )
                          }
                        }
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