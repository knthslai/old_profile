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
    `Starting terminal on: ${currDate}`,
    `Initiating React Components`,
    `Hi Gina, I made this `,
    `It took a lot to have it appear down here `,
    `And then pop up here after `,
    `Pretty cool being able to make all this appear `,
    `And disappear`,
    `don't you think?`
  ]
}