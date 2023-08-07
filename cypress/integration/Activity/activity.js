/// <reference types="Cypress"/>
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import activities from "../../support/pom/activitypom";
const a=new activities;
//Scenario: User login with the valid credintals
Given('user opened the browser and entering the url',()=>{
    a.url();
 a.extra();

})
When('the user entered valid username and password',()=>{
a.usernamepassword();
})
And('clicks on login button after entered valid credintals',()=>{
a.click();
})
Then('the user navigated to halo page',()=>{
a.halopage();
})
// Scenario:User on active course card 
When('the user clicks on the continue learning button',()=>{
  a.activecard();
})
Then('the user navigated to home page',()=>{
    a.home();
})
//  Scenario: User navigated to level index page
When('user click on view more in CoursePlan-Container',()=>{
    a.levelindex();
})
Then('the user should be navigated to level index page',()=>{
    a.levelindexpage();
})
//Scenario: User comparing all unit counts in level index and home page
When('the user comparing unit count in level and home index page',()=>{
a.counts();
})
And('printed unit names in home page',()=>{
a.comparingunits();
})
// Scenario:User completed the activity in unit1
When('user clicks on Vocabulary part in unit1',()=>{
    a.volcabaryact1();
})
And('user started the activity1 of Vocabulary part',()=>{
a.activity();

})
And('Checks the activity is completed on Vocabulary part in unit1',()=>{
a.completedact1();
})


//Scenario: User successfully Logout
When('user clicks on logout button',()=>{
a.logout();
})
Then('the user redirected to login page',()=>{
a.logoutsuccess();
})