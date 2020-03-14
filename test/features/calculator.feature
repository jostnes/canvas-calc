Feature: Calculator

  As a canvas noob, I am testing a canvas calculator feature for the first time,
  noticing more white strands emerging on my head over the course two days.

Scenario: Subtracting smaller number from bigger number should return positive value
  Given I launch online calculator site
  When I subtract "10" from "15"
  Then Calculator should return "5"

Scenario: Subtracting bigger number from smaller number should return negative value
  Given I launch online calculator site
  When I subtract "10" from "5"
  Then Calculator should return "-5"

Scenario: Subtracting the same number should return 0
  Given I launch online calculator site
  When I subtract "5" from "5"
  Then Calculator should return "0"

Scenario: Dividing a smaller number by a bigger number should return 0. decimal value
  Given I launch online calculator site
  When I divide "1" by "5"
  Then Calculator should return "0.2"

Scenario: Dividing a bigger number by a smaller number should return a positive value
  Given I launch online calculator site
  When I divide "5" by "1"
  Then Calculator should return "5"

Scenario: Dividing the same number should return one
  Given I launch online calculator site
  When I divide "5" by "5"
  Then Calculator should return "1"

Scenario: Clearing the calculator should reset it
  Given I launch online calculator site
  And I key in number "5"
  When I click on "CE" button
  Then Calculator should be cleared
