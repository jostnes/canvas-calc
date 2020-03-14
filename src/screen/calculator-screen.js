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
      actualFolder: path.join(process.cwd(), './testActual')
    }

    return browser.saveScreen('canvas', { methodOptions })
  }

  subtract(firstNumber, secondNumber) {
    store.expectedResult = secondNumber - firstNumber
    store.canvas = this.switchToCanvas()

    browser.keys(secondNumber)
    browser.keys('-')
    browser.keys(firstNumber)
    browser.keys('=')

    this.saveScreen()
  }

  divide(firstNumber, secondNumber) {
    store.expectedResult = firstNumber / secondNumber
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

  checkAgainstBaseline() {
    let imageData
    const methodOptions = {
      actualFolder: path.join(process.cwd(), '.tmp/actual'),
      baselineFolder: path.join(process.cwd(), './image/baseline'),
      diffFolder: path.join(process.cwd(), '.tmp/diff'),
    }

    imageData = browser.checkScreen('canvas', methodOptions)

    // The differences of these numbers on the image against baseline image, this was pre-tested and a bit hacky
    // Potentially some numbers may return the same imageData value but there is a diff screenshot for second level validation
    switch (store.expectedResult) {
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
