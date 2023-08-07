import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import learn from "../../support/pom/compareactivityspom";
const l=new learn;

//Scenario: User login with the valid credintals
Given('user opened the browser and entered the url',()=>{
    l.url();
})
When('the user entered valid username and password',()=>{
    l.usernamepassword();
})
And('clicks on login button after entered valid credintals',()=>{
    l.click();
})
Then('the user navigated to halo page',()=>{
    l.halopage();
})
// Scenario:User on active course card 
Given('the user on the halo page',()=>{
    l.halopage();
})
When('the user clicks on the continue learning button',()=>{
    l.continue();
})

Then('the user navigated to home page',()=>{
    l.home()
})
//  Scenario:User comparing the level count in home page and level index page
Given('the user on the home page',()=>{
   
    l.home();
})
When('the user comparing the level count in home page and level index page',()=>{
    l.compareactivity();
})
And('the level count should be same in home page and level index page',()=>{
  l.compare1();
})
//  Scenario:User printing the units name in home page and level index page
Given('the user on the level index page',()=>{
    l.levevlindex();
})
When('the user gets the unit1 name in home page and level index page',()=>{
    l.unit1();
})
And('The unit1 name is printed on both pages',()=>{
    l.unittitle();
})
//Scenario:User comparing the activities name in home page and level index page
Given('the user on the home page checking activities',()=>{
    l.hompage();
})
When('the user comparing the activities name in home page and level index page',()=>{
l.volu();
})
And('the activities name should be same in home page and level index page',()=>{
l.conceptcompare();
})
//Scenario:User checking the activities count in home and level index page
Given('the user on the level index page check activities',()=>{
l.levevlindex();
})
When('the user clicks on Unit1 and then clicks on Vocabulary',()=>{
l.Vocabulary();
})
And('printed the count of activity in both pages',()=>{
    l.Vocabularytext();
})
Then('the activities count should be same',()=>{
    l.Vocabularytextcounut()
})
//Scenario:User comparing completed activities count in home and level index page
Given('the user on the home to check completed activitys',()=>{
    l.hompage();
})
When('user get the count of completed activitys in home page and level index page',()=>{
l.comletedactivity();
})
And('the user printed completed activities count and completed activities name',()=>{
   l.comletedactivitytext();
})
//Scenario:User printing the completed activities of unit1
Given('the user on the level index page check the unit1',()=>{
    l.levevlindex();
})
When('user printed completed activities name of unit1',()=>{
l.unit1activity();
})
//Scenario: User printing the grammar part activities count in level index page
When('user clicks on grammar part of Unit1 in level index page',()=>{
    l.grammar();
})
Then('the grammar part in level index page is visible',()=>{
l.grammarpart();
})
And('user printing the grammar part activity count in level index page',()=>{
    l.grammarpartcount();
})
//Scenario:User printing the grammar part activities name in level index page
When('the user printing the grammar part activities name in level index page',()=>{
    l.grammarpartname();
})
//Scenario: User comparing the grammar part activities and completed activities count
When('the user comparing the grammar part activities and completed activities count',()=>{
l.grammarpartcountcomparing();

})
And('the compared activities name in level index page is printed',()=>{
l.comparedactivities();
})
// Scenario: User logout successfully
When('user clicks on logout button',()=>{
    l.logout();
})
Then('the user redirected to login page',()=>{
    l.logoutsuccess();
})