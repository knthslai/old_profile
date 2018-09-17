const currDate = new Date().toLocaleString(`en-US`, {
  weekday: `long`,
  month: `long`,
  day: `numeric`,
  hour: `numeric`,
  minute: `numeric`,
  formatMatcher: `best fit`
})
module.exports = {
  inputs: [`Starting terminal on: ${currDate}`, `Waiting for input...`]
}