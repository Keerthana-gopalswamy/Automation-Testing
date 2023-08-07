/// <reference types="Cypress"/>
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import activitytest from "../../support/pom/unit2activitytestpom";
const at=new activitytest;

// Scenario: User login with valid credintals
Given('user opened the browser entered the url',()=>{
    at.url();
 // at.extra()
})
When('user enter valid username and password',()=>{
at.usernamepassword();
})
And('clicks on login button',()=>{
at.loginbutton();
})
Then('user navigated to the halo page',()=>{
at.halopage();
})
//Scenario: User on active course card
When('user click on Continue learning button on active course card',()=>{
at.activecard();
})
Then('user navigated to the home page',()=>{
at.homepage();
})
//Scenario: User on level index page
When('user clicks on level index button on home page',()=>{
at.levelindexbutton();
})
Then('user navigated to the level index page',()=>{
at.levelindexpage();
})
// Scenario: User checks the 'Check answer' button is diplayed before the 'Next activity' button
When('user clicks the activity on Grammar part in unit1',()=>{
at.unit1()
})
And('user checks the "Check answer" button is diplayed before the "Next activity" button',()=>{
at.activity();

})
//Scenario: User checks 'refresh' button is displayed without select a answer and after the activity completed 
When('user checks the "refresh" button is displayed after the activity completed',()=>{
at.activity2();
})
// Scenario: User checks the 'refresh' button after select a answer again and again in unit2
  When('user clicks the activity1 on Grammar part in unit1',()=>{
at.activityrefresh();

})
And('user clicks on "refresh" button after selecting the answer on activity',()=>{
at.refreshbutton()
//at.refres();
})
//
When('user clicks the activity1 on Grammar part in unit2',()=>{
 // at.unit2();
})
And('user checks the "refresh" button after select the answer multiple times',()=>{
  //at.unit2activityrefresh();
})
//
When('user clicks the activity2 on Grammar part in unit2',()=>{
// at.continue();
})
And('user checks the "refresh" button after select the answer multiple times in activity2',()=>{
  //at.unit2activity2();
})
//Scenario:User logout successfully
When('user clicks on logout button',()=>{
at.logout();
})
Then('the user redirected to login page',()=>{
at.logoutsuccess();
})