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

step.When(/^I click on (button|number) "(.*)"$/, (_valueType, value) => {
  calculator.pressButton(value)
})

step.Then(/^Calculator should return "(.*)"$/, (result) => {
  expect(calculator.checkAgainstBaseline(result), 'Calculator did not return correct result!').to.equal(0)
})

step.Then(/^Calculator should be cleared$/, () => {
  expect(calculator.checkAgainstBaseline(), 'Calculator not cleared!').to.equal(0)
})
