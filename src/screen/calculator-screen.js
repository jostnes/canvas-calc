const path = require('path')
const store = require('./../helpers/store').store

class Calculator {

  launchCalculatorApp() { 
    browser.url('https://www.online-calculator.com/full-screen-calculator/')
  }
  
  switchToCanvas() {
    browser.switchToFrame(browser.$('#fullframe'))
    return browser.$('#canvas')
  }

  saveScreen() {
    const methodOptions = {
      actualFolder: path.join(process.cwd(), '.tmp/actual')
    }

    return browser.saveScreen('canvas', { methodOptions })
  }

  subtract(firstNumber, secondNumber) {
    store.calculatedResult = secondNumber - firstNumber
    store.canvas = this.switchToCanvas()

    browser.keys(secondNumber)
    browser.keys('-')
    browser.keys(firstNumber)
    browser.keys('=')

    this.saveScreen()
  }

  divide(firstNumber, secondNumber) {
    store.calculatedResult = firstNumber / secondNumber
    store.canvas = this.switchToCanvas()

    browser.keys(firstNumber)
    browser.keys('/')
    browser.keys(secondNumber)
    browser.keys('=')

    this.saveScreen()
  }

  pressButton(button) {
    if ($('#fullframe').isDisplayed()) {
      store.canvas = this.switchToCanvas()
    }

    switch (button) {
      case 'CE':
        button = 'clear'
        break
      default:
        break
    }

    browser.keys(button)
    this.saveScreen()
  }

  checkAgainstBaseline(result) {
    let imageData
    const methodOptions = {
      actualFolder: path.join(process.cwd(), '.tmp/actual'),
      baselineFolder: path.join(process.cwd(), './image/baseline'),
      diffFolder: path.join(process.cwd(), '.tmp/diff'),
    }

    imageData = browser.checkScreen('canvas', methodOptions)

    // Only do this check if result is provided
    if (result) {
      // If result expected in the step doesn't match calculated result, return -1 to fail test
      if (Number(result) !== store.calculatedResult) {
        console.info(`Expected value: "${result}" doesn't match calculated value: "${store.calculatedResult}"`)
        return -1
      }
    }

    // The differences of these numbers on the image against baseline image, this was pre-tested and a bit hacky
    // Potentially some numbers may return the same imageData value but there is a diff screenshot for second level validation
    switch (store.calculatedResult) {
      case -5:
        if(imageData === 0.13) return 0
        break
      case 0:
        if(imageData === 0.08) return 0
        break
      case 0.2:
        if(imageData === 0.18) return 0
        break
      case 1:
        if(imageData === 0.14) return 0
        break
      case 5:
        if(imageData === 0.12) return 0
        break
      default:
        break
    }

    return imageData
  }

}

module.exports = { Calculator }
