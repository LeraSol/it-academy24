Feature: Oz.by training test
  As a user ...

  Scenario: Error text should be when we go to account without email
    Given I navigate to "oz.by"
    When I login without email
    Then I should see text "Введите адрес электронной почты"

