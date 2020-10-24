### What is this?
-----------------
This project contains a set of simple tests testing an online calculator written in cucumber gherkin using webdriverio. 

Scenarios are listed in [features](test/features/calculator.feature)

Validation is using image comparison against a baseline image. The baseline image is the calculator in its reset state e.g. the state of the calculator when URL is first loaded.

### How can I test this out?
-----------------------------
To test this locally:
1. Use node v12.19.0
2. Have Chrome browser installed
3. From terminal, run `npm install` and `npm test` from the project path

### Example test runs
----------------------
Example of passing tests:
```
------------------------------------------------------------------
[chrome  mac os x #0-0] Spec: /Users/jos/code/canvas-calc/test/features/calculator.feature
[chrome  mac os x #0-0] Running: chrome on mac os x
[chrome  mac os x #0-0] Session ID: c0a3cfa55f6d7852c2431de3b4b41b82
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] Calculator
[chrome  mac os x #0-0]     Subtracting smaller number from bigger number should return positive value
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I subtract "10" from "15"
[chrome  mac os x #0-0]        ✓ Then Calculator should return "5"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0]     Subtracting bigger number from smaller number should return negative value
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I subtract "10" from "5"
[chrome  mac os x #0-0]        ✓ Then Calculator should return "-5"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0]     Subtracting the same number should return 0
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I subtract "5" from "5"
[chrome  mac os x #0-0]        ✓ Then Calculator should return "0"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0]     Dividing a smaller number by a bigger number should return 0. decimal value
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I divide "1" by "5"
[chrome  mac os x #0-0]        ✓ Then Calculator should return "0.2"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0]     Dividing a bigger number by a smaller number should return a positive value
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I divide "5" by "1"
[chrome  mac os x #0-0]        ✓ Then Calculator should return "5"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0]     Dividing the same number should return one
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I divide "5" by "5"
[chrome  mac os x #0-0]        ✓ Then Calculator should return "1"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0]     Clearing the calculator should reset it
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ And I click on number "5"
[chrome  mac os x #0-0]        ✓ When I click on button "CE"
[chrome  mac os x #0-0]        ✓ Then Calculator should be cleared
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 22 passing (18s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:21
```

Example of failing test:
```
------------------------------------------------------------------
[chrome  mac os x #0-0] Spec: /Users/jos/code/canvas-calc/test/features/calculator.feature
[chrome  mac os x #0-0] Running: chrome on mac os x
[chrome  mac os x #0-0] Session ID: 70da28419eaaeab5ce3b813e8f48c9bf
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] Calculator
[chrome  mac os x #0-0]     Subtracting smaller number from bigger number should return positive value
[chrome  mac os x #0-0]        ✓ Given I launch online calculator site
[chrome  mac os x #0-0]        ✓ When I subtract "10" from "15"
[chrome  mac os x #0-0]        ✖ Then Calculator should return "-5"
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 2 passing (5.6s)
[chrome  mac os x #0-0] 1 failing
[chrome  mac os x #0-0]
[chrome  mac os x #0-0] 1) Subtracting smaller number from bigger number should return positive value Then Calculator should return "-5"
[chrome  mac os x #0-0] Calculator did not return correct result!: expected -1 to equal 0
[chrome  mac os x #0-0] AssertionError: Calculator did not return correct result!: expected -1 to equal 0
[chrome  mac os x #0-0]     at World.<anonymous> (/Users/jos/code/canvas-calc/src/step-definitions/calculator-steps.js:29:99)


Spec Files:	 0 passed, 1 failed, 1 total (100% completed) in 00:00:07
```

### Known issue
-----------------
When running tests, sometimes this error happens:
```
[1584191228.565][SEVERE]: Timed out receiving message from renderer: 0.100
[1584191228.894][SEVERE]: Timed out receiving message from renderer: 0.100
[1584191228.998][SEVERE]: Timed out receiving message from renderer: 0.100
[1584191229.100][SEVERE]: Timed out receiving message from renderer: 0.100
```

This is due to the slow loading ads on the page. This has not been resolved at time of writing.
