Feature: Audio test in activity part

    Feature Description
     As a user I wanted to complete and
     Check the audio test in activity part

      Scenario: User login with valid credintals
     Given user opened the browser entered the url
     When user enter valid username and password
     And clicks on login button
     Then user navigated to the halo page

Scenario: User on activie course then navigate to level index page
When user click on Continue learning button on active course card
And user clicks on level index button on home page
Then user navigated to the level index page
   
   Scenario:User checks the audio part activity in unit2
When user on the audio activity on Grammar part
And user plays the audio part activity


Scenario:User logout successfully
When user clicks on logout button
Then user navigated to login page

