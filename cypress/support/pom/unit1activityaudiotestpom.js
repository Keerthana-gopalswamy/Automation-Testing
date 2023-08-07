/// <reference types="Cypress"/>
import * as locators from '../locators/loginlogout';
class audiotest{
   // Scenario: User login with valid credintals
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
             
            cy.get('h2').should('be.visible') ;
            cy.get(locators.username).type(data.UserName);
             cy.get(locators.password).type(data.PassWord);
             
         })
    }
    loginbutton(){
        cy.get(locators.loginbutton).click();
        cy.intercept('POST','https://loginsvc.learnship.com/ssologin').as('halo')
        cy.wait('@halo')
    }
    halopage(){
        cy.get('[class="allHeaders"]',{timeout:10000}).should('be.visible')
    }
    //Scenario: User on activie course then navigate to level index page
    activecard(){
        cy.intercept('POST','https://portal-api.learnship.com/graphql').as('continue')
        cy.wait('@continue')
        
        cy.get('.productCardsContainer > .ProductCardBlock > .card_verticalContent > .pCardBody > :nth-child(4) > .pCardButtonsBlock > .MuiButtonBase-root > .MuiButton-label')
        .should('exist').click({force:true})
    }
    levelindex(){
        cy.get('#levelIndex',{timeout:10000}).click();
    
    
    }
    levelindexpage(){
        cy.url().should('eq','https://sprint.learnship.com/businessenglish/levelindex')
        
        cy.get(':nth-child(1) > .unitList-overview',{timeout:100000}).should('exist');
    
    }
    unit1(){
 
        cy.get(':nth-child(1) > .unitList-overview',{timeout:100000}).should('exist');
      
         let unit1activitytext; 
         cy.get(':nth-child(1) > .unitList-overview')
            .within(() => {
              cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
              .children().its('length').then((len)=>{          // children count of unit1
                cy.log('the length:'+len)
                for(let i=0;i<len;i++){
                  if(i==2){
                      cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
                      .children().eq(i).invoke('text').then((text)=>{
                          unit1activitytext=text;
                          cy.log('the activity part of unit1 text  :' +unit1activitytext)
                          cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
                          .children().eq(i).click();
                      })
                             }
                            }
                
              })
          
          })
      
      }
      //  Scenario:User checks the audio part activity in unit2
      unit1activity(){
          
        this.unit1();
        let countlevel2;
        cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
                .its('length')
                .then((count2) => {
                  countlevel2=count2;
        cy.log("Element count   :"+countlevel2);
        for(let j1=0;j1<countlevel2;j1++){
           if(j1===0){
               cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
               .eq(j1).click();
               cy.get('.right > .mat-focus-indicator').click();         //get started
               cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();     //refresh button
               cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();        //delete icon
             
               
             
             
           }
       }
        
                })
     
   }
   audioact(){
  
    cy.get('#player-1 > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video')
    .should('have.prop','paused',true) ;        //the audio is not playing
    cy.get('.jw-icon-playback').click();       //play the audio
    cy.get('#player-1 > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video')
    .should('have.prop','paused',false) ;   //audio is playing
    cy.get('#player-1 > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video',{timeout:100000})
    .and('have.prop', 'ended', true)  ;          //audio is ended
    this.audioans();


   
}
audioans(){
    cy.get('.componentContainer > app-choice.ng-star-inserted > .choiceWrapper > .questions > :nth-child(1) > .options-wrapper > :nth-child(2) > .btn')
    .click();           //ans
    cy.get('.full-width-btns > .mat-button-wrapper').click();       //check answer
    cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();         //refresh
    cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();        //delete icon

    cy.get('.componentContainer > app-choice.ng-star-inserted > .choiceWrapper > .questions > :nth-child(1) > .options-wrapper > :nth-child(2) > .btn')
    .click();           //ans
    cy.get('.full-width-btns > .mat-button-wrapper').click();       //check answer
    cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();         //refresh
    cy.get('[style="margin-left: inherit;"]').click();        //delete icon

    
    cy.get('.componentContainer > app-choice.ng-star-inserted > .choiceWrapper > .questions > :nth-child(1) > .options-wrapper > :nth-child(2) > .btn')
    .click();           //ans
  //  cy.get('.full-width-btns > .mat-button-wrapper').click();       //check answer
   // cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();         //refresh
    //cy.get('[style="margin-left: inherit;"]').click();        //delete icon
  
  
}
  
   audioactivity(){
    cy.get("#player-1 > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video")
    .should('exist');
    cy.get('.jw-icon-playback').click();                //click audio
    cy.get("#player-1 > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video")
    .should('have.prop','paused',false)    //verify the audio is playing
    .then((video) => {
      video[0].play(); 
      cy.wrap(video[0]).should('have.prop', 'ended', false); // Verify that the audio is not ended
     cy.get('.componentContainer > app-choice.ng-star-inserted > .choiceWrapper > .questions > :nth-child(1) > .options-wrapper > :nth-child(1) > .btn').click();
      cy.get('.full-width-btns > .mat-button-wrapper').click();       //check answer
      
      cy.get("#player-1 > div.jw-wrapper.jw-reset > div.jw-media.jw-reset > video")
      .should('exist');
      cy.on('uncaught:exception',()=>false)
      
      cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon',{timeout:10000}).should('exist').click();     //refresh button
      cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon',{timeout:10000}).should('exist').click();        //delete icon
    
    });
  
    
    
   }
   
   

   //Scenario:User logout successfully
   logout(){
    cy.go('back');
    cy.go('back');
    cy.go('back');
  // cy.get('.right > .mat-focus-indicator').click();         //get started
  // cy.get('.nav-ctrl > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
           cy.get(locators.logout).click({force:true});
   cy.contains('Log out').click({force:true});
   }
   
   logoutsuccess(){
    cy.url().should('eq','https://login.learnship.com/')
   }
}

export default audiotest;