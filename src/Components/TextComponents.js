const currDate = new Date().toLocaleString(`en-US`, {
  weekday: `long`,
  month: `long`,
  day: `numeric`,
  hour: `numeric`,
  minute: `numeric`,
  formatMatcher: `best fit`
})
module.exports = {
  inputs: [
    // `Starting terminal on: ${currDate}`,
    // `Initiating React Components`,
    `Load bg-gif:Top`,
    `Load nav-item:Top`,
    // `Load info-Container:Left`,
    // `Load Web-Resume`
  ]
}