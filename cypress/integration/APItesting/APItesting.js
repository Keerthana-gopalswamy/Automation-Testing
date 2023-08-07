/// <reference types="Cypress"/>
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";

import Api from "../../support/pom/APItestingpom";
const t=new Api;
// Scenario: user login with valid credintals
Given('user opened the browser and enterd the url',()=>{
    t.url();
 //t.extra();
})
When('user entered the valid username and password',()=>{
    t.userpass();
})
And('clicks on the login button',()=>{
    t.loginbutton();
})
Then('user navigated to the halo page',()=>{
    t.halopage();
})

And('user checks the "Http request"',()=>{
    t.apirequest();
})
//
When('user clicks on  "Continue learning" in active Course card',()=>{
    t.activecard();
})
And('user checks the api request in active Course card',()=>{
t.continue();
})
Then('user navigated to the home page',()=>{
t.hompage();
})
//logout successfully
When('user click on logout button',()=>{
t.logoutbutton();
})
Then('user logout successfully and navigated to login page',()=>{
t.logoutsuccess();
})