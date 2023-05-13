Feature: Board functionality

  Scenario: Create a board
    Given User goes to the store
    When User logs in
    And User selects certain items
    And User goes to check the cart 
    And User goes to checkout
    And User inserts delivery info
    And User confirms purchase
    Then User can see confirmation message