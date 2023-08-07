/// <reference types="Cypress"/>



class activities{
  //Scenario: User login with the valid credintals
  url(){
      cy.fixture('learn').then((data1)=>{
        cy.visit(data1.url)
      })
    }
  extra(){
     // cy.get('#accept_cookie').click();
   cy.get('#close > span').click();
  }
    usernamepassword(){
      cy.fixture('learn').then((data)=>{
         
         cy.get('h2').should('be.visible') 
         cy.get('[id="txtUsername"]').type(data.UserName)
          cy.get('#txtPassword').type(data.PassWord)
          
      })
  }
  click(){
      
      cy.get('#btnLogin').click();
     cy.intercept('POST','https://loginsvc.learnship.com/ssologin').as('halo')
     cy.wait('@halo')
  }
  halopage(){
      
      cy.get('.allHeaders',{timeout:10000}).should('be.visible');
    
  }
// Scenario:User on active course card 
activecard(){
  cy.intercept('POST','https://portal-api.learnship.com/graphql').as('continue')
  cy.wait('@continue')
  cy.get('.productCardsContainer > .ProductCardBlock > .card_verticalContent > .pCardBody > :nth-child(4) > .pCardButtonsBlock > .MuiButtonBase-root',{timeout:1000})
    .click();
}    
home(){
    cy.get('.activeItem > a').should('be.visible')
  
}
//  Scenario: User navigated to level index page
levelindex(){
  cy.intercept('POST','https://portal-api.learnship.com/graphql').as('level')
  cy.wait('@level');
 
  cy.get('.content_section > span',{timeout:10000}).should('exist')
  cy.get('.viewMore').click();
}
levelindexpage(){
  cy.url().should('eq','https://sprint.learnship.com/businessenglish/levelindex')
}
//

units(){
 cy.get('.viewMore').click();
 cy.intercept('POST','https://portal-api.learnship.com/graphql').as('unit')
 cy.wait('@unit')
 cy.get('span').contains('Unit 1: Working life').should('be.visible')
 cy.get('[class="levelIndex-container"]').within(()=>{
      cy.get('div > div.MuiButtonBase-root.MuiAccordionSummary-root.selected-unit > div.MuiAccordionSummary-content > span') 
        .each(($ele,index)=>{
          cy.wrap($ele).invoke('text').then((text)=>{
              let levelunits=text;
              cy.log(levelunits)
              

             })

      })
  })
}
//Scenario: User comparing all unit counts in level index and home page
counts(){
  let countlevel;
  let counthome
  cy.intercept('POST','https://portal-api.learnship.com/graphql').as('unit')
  cy.wait('@unit')
 cy.get('div.MuiButtonBase-root.MuiAccordionSummary-root.selected-unit > div.MuiAccordionSummary-content > span')
    .its('length')
     .then((count1) => {
   cy.log('count:', count1);
  countlevel=count1;
cy.log("levelpage unit counts: "+countlevel);
 }) 
  cy.get('[data-rb-event-key="home"]').click();
 cy.get('ul > li > ul > li:nth-child(1) > div > div:nth-child(1)')
 .its('length')
 .then((count2) => {
   cy.log('count:', count2);
  counthome=count2;
cy.log("homepage unit counts: "+counthome);
 }) 
 


  }
  comparingunits(){
      let countlevel;
      let counthome;

   if(countlevel===counthome){
cy.log("the counts are same in both home and level index page ")

return this.units();
   }
   else{
      cy.log("the counts are not same in both home and level index page")
   }
  }
  // Scenario:User completed the activity in unit1
   volcabaryact1(){
    cy.get(':nth-child(1) > .unitList-overview',{timeout:10000}).should('exist');

      cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul')
       .first().click();
    
   }
 /*  activity(){
      
      cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul>li')
      .first().click();
      cy.intercept('POST','https://portal-api.learnship.com/graphql').as('act1')
      cy.wait('@act1')
      cy.get('.right > .mat-focus-indicator').click();
      cy.get('.activityno').invoke('text').then((text)=>{
          let testcount=text;
          cy.log(testcount);
          const ar2=text.split(" ")
          let testscount= ar2[3]
          cy.log("testscount of activity one is: "+testscount);
          for(let i=1;i<testscount;i++){
              cy.get('.full-width-btns > .mat-button-wrapper').click();
              if(i==testscount){ 
                  break;
              }
          }
          cy.get('span').contains('Results').click();
          cy.get('span').contains('Continue').click();
          cy.wait('@act1')
          cy.wait(5000);
         
      })
   }*/
   activity(){
      
    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul>li')
    .first().click();               //vocabalary act1
    cy.intercept('POST','https://portal-api.learnship.com/graphql').as('act1')
    cy.wait('@act1')
    cy.get('.right > .mat-focus-indicator').click();   //get started
    cy.contains('refresh').click();
    cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();

    cy.get('.componentContainer > app-wordselector.ng-star-inserted > .Medium > .word-container > :nth-child(3) > .mat-button-wrapper > .label-wrapper')
    .click();
    
    cy.get('span').contains('Check answer').click();   //checking answer
    cy.contains('refresh').click();       //refreh page
 
    
   cy.get('.modal-body').should('exist');
  
    cy.get('.mat-focus-indicator').should('exist').click();
    

 
      
    
  
   }
continue(){
  cy.get('.productCardsContainer > .ProductCardBlock > .card_verticalContent > .pCardBody > :nth-child(4) > .pCardButtonsBlock > .MuiButtonBase-root',{timeout:1000})
  .click();
  cy.get('.viewMore',{timeout:10000}).click();
}


   completedact1(){

cy.wait('@act1');
cy.wait(5000);
this.continue();
this.volcabaryact1();
cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul>li')
.first().should('not.have.class','[class="completed"]')
}
   //
   unit1(){
      cy.get(':nth-child(1) > .unitList-overview')
      .within(() => {
        cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
        .children().its('length').then((len)=>{          // children count of unit1
          cy.log('the length:'+len)
          for(let i=0;i<len;i++)
          cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
          .children().eq(i).invoke('text').then((text)=>{    // children text of unit1
              const mytext = text.split(" ");
              cy.log('the text of length  :'+mytext[0] +"childpart")
             
          })
        });
        
      }) 

     
    
  }
   unit1comletedactivity(){
    cy.get(':nth-child(1) > .unitList-overview')
      .within(() => {
        cy.get(':nth-child(1) > .unitList-overview > .selected-unit').first().click();
    
            })

          }
       
//Scenario: User successfully Logout
logout(){
  cy.get('.burger-menu > #basic-nav-dropdown').click();
  cy.contains('Log out').click();
}
logoutsuccess(){
  cy.url().should('eq','https://login.learnship.com/')
}
}
export default activities;