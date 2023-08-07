Feature:Updated activities in level index page

    Feature Description
    Check whether the activities are updated after 
    the user complete the activities in the level index page

    Scenario: User login with the valid credintals
    Given user opened the browser and entering the url
    When the user entered valid username and password
    And  clicks on login button after entered valid credintals
    Then the user navigated to halo page 
    
    Scenario:User on active course card 
    When the user clicks on the continue learning button
    Then the user navigated to home page

    Scenario: User navigated to level index page
    When user click on view more in CoursePlan-Container
    Then the user should be navigated to level index page

    Scenario: User comparing all unit counts in level index and home page
    When the user comparing unit count in level and home index page
    And printed unit names in home page

    Scenario:User completed the activity in unit1
    When user clicks on Vocabulary part in unit1
    And user started the activity1 of Vocabulary part
    And Checks the activity is completed on Vocabulary part in unit1




   

    Scenario: User successfully Logout
    When user clicks on logout button
    Then the user redirected to login page
