module.exports = {
  inputs: [
    `Load bg-gif:Top`,
    `Load nav-item:Top`,
  ],
  aboutMe: [{ text: `After pitching and acquiring the position of a database administrator for a startup, I experienced the true nature of being a developer. Starting from the ground up, I had to research and implement all relevant tasks from handling database requests to designing front end clients. This allowed my problems to become opportunities and my work to become a passion.`, img: [`benesse.gif`] },
  { text: `There were no doubts in my mind to make this passion my career, which was why I attended Fullstack Academy immersive dev program in NYC. It was there that I obtained the best practices and relevant tools to compete with current developers on the field.`, img: [`FSA.gif`] },
  {
    text: `I have found my love for programming very naturally when serving up database queries. As well as anything in between that and launching projects to a functional state. I currently specialize in full stack development with JavaScript integrations here in NYC.`, img: [``]
  }
  ],
  projects: [{
    projectName: `Molli`, demoLink: `https://expo.io/@knthslai/molli`, gitHubLink: `https://github.com/capstone/molli`,
    role: `API & Database Management`,
    description: `A mobile application developed to cater to the E - Sports audience and provide microtransaction bets.`,
    keyPoints: `Incorporated Firebase Cloud Functions to handle server side API requests to continuously check results.Created live notifications for obtaining the scores of the match they are watching.Provided realtime chatrooms feature for a more immersive user experience.`, img: `Molli.gif`
  }, {
    projectName: `Clique-On`,
    demoLink: `https://clique-on.herokuapp.com`, gitHubLink: `https://github.com/knthslai/clique-on`,
    role: `Sole Developer`,
    description: `An online tool to track friends in realtime featuring a live chat box.`,
    keyPoints: `Utilized Pubnub API to dispatch, broadcast up - to - the - millisecond location and messaging and Google Maps API for map navigation. Designed persistent account interface for guest, signup, login. Implemented URL based room management for users to share and communicate through.`, img: `cliqueOn.gif`
  }
  ]
}