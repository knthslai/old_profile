import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import anime from "animejs"
export default class NavBar extends Component {
  preLoadOutMenu = () => {
    let inUse = false
    return () => {
      const menuBtnRef = document.getElementById(`navIcon`)
      if (this.props.mobile && this.props.load && !inUse) {
        inUse = true
        let time = 0
        const timeline = anime.timeline({ easing: `easeInOutCirc`, })
        const timelineOptions = {
          translateY: 185,
          duration: 2000,
          offset: time
        }
        menuBtnRef.style.backgroundColor = `gray`
        timelineOptions.translateX = [{ value: 225 }]
        timelineOptions.translateY = [{ value: 15 }]



        for (let j = 1; j < 5; j++) {
          timelineOptions.targets = `.nav-item.slide${j}`
          timeline.add(timelineOptions)
          timelineOptions.offset += 250
        }
        setTimeout(() => {
          const timeline = anime.timeline({ easing: `easeInOutCirc`, })
          time = 0
          menuBtnRef.style.backgroundColor = `black`
          timelineOptions.translateX = [{ value: 225 }]
          timelineOptions.translateY = [{ value: -125 }]
          for (let j = 1; j < 5; j++) {
            timelineOptions.targets = `.nav-item.slide${j}`
            timeline.add(timelineOptions)
            timelineOptions.offset += 250
          }
          inUse = false
        }, 5000)
      }
    }
  }
  handleClick = (div) => {
    if (this.props.load) {
      document.getElementById(div).scrollIntoView({ behavior: `smooth`, block: `start` })
    }
  }
  render() {
    const loadOutMenu = this.preLoadOutMenu()
    return (
      <div id="nav-Bar" >

        <Icon id="navIcon" name="align justify" size="large" className="nav-item" onClick={loadOutMenu}><h3 style={{ paddingLeft: `10px` }}> - Menu </h3></Icon >

        <div id="about-Me" className="nav-item" onClick={() => this.handleClick(`AboutMe`)}>
          <h2>About Me</h2>
          <a> How I became<br />
            a programmer.<br />
            I found my<br />
            passion through...<br />
          </a>
        </div>
        <div id="projects" className="nav-item" onClick={() => this.handleClick(`Projects`)}>
          <h2>Projects</h2>
          <a> Proud to say<br />
            I worked on<br />
            these projects!<br />
          </a>
        </div>
        <div id="background" className="nav-item" onClick={() => this.handleClick(`Background`)}>
          <h2>Background</h2>
          <a> Working in NYC<br />
            taught me<br />
            valuable and<br />
            transferable<br />
            skills!<br />
          </a>
        </div>
        <div id="Posts" className="nav-item" onClick={() => this.handleClick(`Posts`)}>
          <h2>Posts</h2>
          <a> How I became<br />
            a programmer.<br />
            I found my<br />
            passion...<br />
          </a>
        </div>
      </div>
    )
  }
}