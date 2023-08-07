/// <reference types="Cypress"/>
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import audiotest from "../../support/pom/unit1activityaudiotestpom";
const ad=new audiotest;
// Scenario: User login with valid credintals
Given('user opened the browser entered the url',()=>{
    ad.url();
   //ad.extra();
})
When('user enter valid username and password',()=>{
    ad.usernamepassword();
})
And('clicks on login button',()=>{
    ad.loginbutton();
})
Then('user navigated to the halo page',()=>{
    ad.halopage();
})
//Scenario: User on activie course then navigate to level index page
When('user click on Continue learning button on active course card',()=>{
    ad.activecard();
})
And('user clicks on level index button on home page',()=>{
    ad.levelindex();
})
Then('user navigated to the level index page',()=>{
    ad.levelindexpage();
})
//  Scenario:User checks the audio part activity in unit2
When('user on the audio activity on Grammar part',()=>{
    ad.unit1activity();
})
And('user plays the audio part activity',()=>{
    ad.audioactivity();
  //  ad.audioact();

})

//Scenario:User logout successfully
When('user clicks on logout button',()=>{
    ad.logout();
})
Then('user navigated to login page',()=>{
    ad.logoutsuccess();
})
