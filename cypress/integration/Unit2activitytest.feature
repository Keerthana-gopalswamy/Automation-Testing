Feature: activity page buttons

    Feature Description 
    As a user I wanted to
    Check whether the buttons in activity page are working
    after selecting the answer multiple times

     Scenario: User login with valid credintals
     Given user opened the browser entered the url
     When user enter valid username and password
     And clicks on login button
     Then user navigated to the halo page

     Scenario: User on active course card
     When user click on Continue learning button on active course card
     Then user navigated to the home page

    Scenario: User on level index page
    When user clicks on level index button on home page
    Then  user navigated to the level index page

     Scenario: User checks the 'Check answer' button is diplayed before the 'Next activity' button
     When user clicks the activity on Grammar part in unit1
     And  user checks the "Check answer" button is diplayed before the "Next activity" button
     
     Scenario: User checks 'refresh' button is displayed without select a answer and after the activity completed 
     When user checks the "refresh" button is displayed after the activity completed

    Scenario: User checks the 'refresh' button after select a answer again and again
    When user clicks the activity1 on Grammar part in unit1
    And user clicks on "refresh" button after selecting the answer on activity    
    
    Scenario: User checks the 'refresh' button after select a answer again and again in unit2
    When user clicks the activity1 on Grammar part in unit2
    And user checks the "refresh" button after select the answer multiple times

   Scenario: User checks the 'refresh' button after select a answer in activity2 again and again on unit2
    When user clicks the activity2 on Grammar part in unit2
    And user checks the "refresh" button after select the answer multiple times in activity2
  






    Scenario:User logout successfully
    When user clicks on logout button
    Then the user redirected to login page