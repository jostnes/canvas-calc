const assert = require('node:assert/strict')
const step = require('@wdio/cucumber-framework')
const Calculator = require('../screen/calculator-screen').Calculator

const calculator = new Calculator()

step.Given(/^I launch online calculator site$/, async () => {
  await calculator.launchCalculatorApp()
})

step.When(/^I subtract "(.*)" from "(.*)"$/, async (firstNumber, secondNumber) => {
  await calculator.subtract(firstNumber, secondNumber)
})

step.When(/^I divide "(.*)" by "(.*)"$/, async (firstNumber, secondNumber) => {
  await calculator.divide(firstNumber, secondNumber)
})

step.When(/^I click on (button|number) "(.*)"$/, async (_valueType, value) => {
  await calculator.pressButton(value)
})

step.Then(/^Calculator should return "(.*)"$/, (result) => {
  assert.equal(calculator.getResult(), Number(result), 'Calculator did not return correct result!')
})

step.Then(/^Calculator should be cleared$/, () => {
  assert.equal(calculator.getResult(), 0, 'Calculator not cleared!')
})
