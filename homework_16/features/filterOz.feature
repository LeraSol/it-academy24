Feature: Oz.by training test
  As a user ...

  Scenario: Page should filter by cheap price
    Given I navigate to "oz.by"
    When I go to "beauty" ".main-nav__list__item[href='/beauty/']"
    And I filter page by cheap price
    Then I should see page with filter by cheap price

