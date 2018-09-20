import React, { Component } from 'react';
export default class NavBar extends Component {
  render() {
    return (
      <div id="nav-Bar">
        <div id="about-Me" className="nav-item">
          <h2>About Me</h2>
          <a> How I became<br />
            a programmer.<br />
            I found my<br />
            passion...<br />
          </a>
        </div>
        <div id="projects" className="nav-item">
          <h2>Projects</h2>
          <a> Proud to say<br />
            I worked on<br />
            these projects!<br />
          </a>
        </div>
        <div id="background" className="nav-item">
          <h2>Background</h2>
          <a> Working in NYC<br />
            taught me<br />
            valuable and<br />
            transferable<br />
            skills!<br />
          </a>
        </div>
        <div id="Posts" className="nav-item">
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