Feature: Oz.by training test
  As a user ...

  Scenario Outline: Item in section should add in cart
    Given I navigate to "oz.by"
    When I go to "<section>" "<locator>"
    And I add item in cart
    Then I should see number in cart

    Examples:
      | section  | locator                               |
      | beauty   | .main-nav__list__item[href='/beauty/']|
      | books    | .main-nav__list__item[href='/books/'] |