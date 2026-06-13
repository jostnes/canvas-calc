const store = require('./../helpers/store').store

class Calculator {

  async launchCalculatorApp() {
    await browser.url('https://www.online-calculator.com/full-screen-calculator/')
  }

  async switchToCanvas() {
    const frame = await browser.$('#fullframe')
    await browser.switchFrame(frame)
    return browser.$('#canvas')
  }

  async subtract(firstNumber, secondNumber) {
    store.calculatedResult = secondNumber - firstNumber
    store.canvas = await this.switchToCanvas()

    await browser.keys(secondNumber)
    await browser.keys('-')
    await browser.keys(firstNumber)
    await browser.keys('=')
  }

  async divide(firstNumber, secondNumber) {
    store.calculatedResult = firstNumber / secondNumber
    store.canvas = await this.switchToCanvas()

    await browser.keys(firstNumber)
    await browser.keys('/')
    await browser.keys(secondNumber)
    await browser.keys('=')
  }

  async pressButton(button) {
    const frame = await browser.$('#fullframe')
    if (await frame.isDisplayed()) {
      store.canvas = await this.switchToCanvas()
    }

    switch (button) {
      case 'CE':
        button = 'clear'
        store.calculatedResult = 0
        break
      default:
        store.calculatedResult = Number(`${store.calculatedResult}${button}`)
        break
    }

    await browser.keys(button)
  }

  getResult() {
    return store.calculatedResult
  }

}

module.exports = { Calculator }
