const expect = require('chai').expect
const step = require('cucumber')
const store = require('../helpers/store').store
const Calculator = require('../screen/calculator-screen').Calculator

const calculator = new Calculator()

step.Given(/^I launch online calculator site$/, () => {
  calculator.launchCalculatorApp()
})

step.When(/^I subtract "(.*)" from "(.*)"$/, (firstNumber, secondNumber) => {
  calculator.subtract(firstNumber, secondNumber)
})

step.When(/^I divide "(.*)" by "(.*)"$/, (firstNumber, secondNumber) => {
  calculator.divide(firstNumber, secondNumber)
})

step.When(/^I key in number "(.*)"$/, (number) => {
  calculator.pressButton(number)
})

step.Then(/^Calculator should return "(.*)"$/, (expectedValue) => {
  expect(calculator.checkAgainstBaseline()).to.equal(0)
})

step.Then(/^I click on "(.*)" button$/, (button) => {
  calculator.pressButton(button)
})

step.Then(/^Calculator should be cleared$/, () => {
  expect(calculator.checkAgainstBaseline()).to.equal(0)
})
