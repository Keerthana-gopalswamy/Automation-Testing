Feature: API testing using cypress

    Feature Description
    API testing using cypress
    in automation tool

    Scenario: User login with valid credintals
    Given user opened the browser and enterd the url
    When user entered the valid username and password
    And clicks on the login button
    Then user navigated to the halo page
   And user checks the "Http request"

   
    
    Scenario: User done the api testing for "Continue learning"
    When user clicks on  "Continue learning" in active Course card
    And user checks the api request in active Course card
    Then user navigated to the home page 


    Scenario: User logout successfully
    When user click on logout button
    Then user logout successfully and navigated to login page
