### What is this?
-----------------
This project contains a set of simple tests testing an online calculator written in cucumber gherkin using webdriverio. 

Scenarios are listed in [features](test/features/calculator.feature)

For validation, it's using image comparison against a baseline image. The baseline image is the calculator in its reset state e.g. the state of the calculator when URL is first loaded.

### How can I test this out?
-----------------
To test this locally: 
1. Use node v12.16.1
2. Have Chrome browser installed
3. From terminal, run `npm install` and `npm test` from the project path
