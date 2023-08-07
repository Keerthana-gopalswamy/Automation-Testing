Feature: Activity count in level index and home page
As a user I want to compare the activities count and title 
in home page and level index page


    Scenario: User login with the valid credintals
    Given user opened the browser and entered the url
    When the user entered valid username and password
    And  clicks on login button after entered valid credintals
    Then the user navigated to halo page 
    

    Scenario:User on active course card 
     Given the user on the halo page
    When the user clicks on the continue learning button
    Then the user navigated to home page

    Scenario:User comparing the level count in home page and level index page
    Given the user on the home page
    When  the user comparing the level count in home page and level index page
    And  the level count should be same in home page and level index page

    Scenario:User printing the units name in home page and level index page
    Given the user on the level index page
    When the user gets the unit1 name in home page and level index page
    And   The unit1 name is printed on both pages

    Scenario:User comparing the activities name in home page and level index page
    Given the user on the home page checking activities
    When the user comparing the activities name in home page and level index page
    And  the activities name should be same in home page and level index page
   
   Scenario:User checking the activities count in home and level index page
   Given the user on the level index page check activities
   When  the user clicks on Unit1 and then clicks on Vocabulary
   And printed the count of activity in both pages
   Then the activities count should be same

   Scenario:User comparing completed activities count in home and level index page
   Given the user on the home to check completed activitys 
   When user get the count of completed activitys in home page and level index page
   And  the user printed completed activities count and completed activities name

Scenario:User printing the completed activities of unit1
Given the user on the level index page check the unit1
When user printed completed activities name of unit1

Scenario: User printing the grammar part activities count in level index page
When user clicks on grammar part of Unit1 in level index page
Then the grammar part in level index page is visible
And user printing the grammar part activity count in level index page

Scenario:User printing the grammar part activities name in level index page
When the user printing the grammar part activities name in level index page

Scenario: User comparing the grammar part activities and completed activities count
When the user comparing the grammar part activities and completed activities count
And  the compared activities name in level index page is printed

     Scenario: User logout successfully
    When user clicks on logout button
    Then the user redirected to login page


