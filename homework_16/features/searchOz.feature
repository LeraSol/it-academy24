Feature: Oz.by training test
  As a user ...

  Scenario: Search text should contain in the result page
    Given I navigate to "oz.by"
    When I search text "Дюна" in search field
    Then I should see text "Дюна" in element ".digi-product__label" 0 number

