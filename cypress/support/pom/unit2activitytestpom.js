/// <reference types="Cypress"/>
class activitytest{
    //user login with valid credintals
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
        cy.get('[id="txtUsername"]').type(data.UserName);
         cy.get('#txtPassword').type(data.PassWord);
         
     })
}
loginbutton(){
    cy.get('#btnLogin').click();
    cy.intercept('POST','https://loginsvc.learnship.com/ssologin').as('halo')
    cy.wait('@halo')
}
halopage(){
    cy.get('[class="allHeaders"]').should('be.visible')
}
activecard(){
    cy.intercept('POST','https://portal-api.learnship.com/graphql').as('continue')
    cy.wait('@continue')
    
    cy.get('.productCardsContainer > .ProductCardBlock > .card_verticalContent > .pCardBody > :nth-child(4) > .pCardButtonsBlock > .MuiButtonBase-root > .MuiButton-label')
    .should('exist').click({force:true})
   
   
    

}
homepage(){
    cy.wait('@continue')
    cy.get('.activeItem > a').should('be.visible')
    cy.wait('@continue')
  
}
//levelindex
levelindexbutton(){
    cy.get('#levelIndex').click();
    cy.intercept('POST','https://portal-api.learnship.com/graphql').as('level')
    cy.wait('@level')
}
levelindexpage(){
    cy.url().should('eq','https://sprint.learnship.com/businessenglish/levelindex')
    cy.wait('@level')
    cy.get(':nth-child(1) > .unitList-overview',{timeout:100000}).should('exist');


}
//  User check the refresh button is displayed after the activity completed
unit1(){
 
  cy.get(':nth-child(1) > .unitList-overview',{timeout:100000}).should('exist');

   let unit1activitytext; 
   cy.get(':nth-child(1) > .unitList-overview')
      .within(() => {
        cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
        .children().its('length').then((len)=>{          // children count of unit1
          cy.log('the length:'+len)
          for(let i=0;i<len;i++){
            if(i==0){
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

activity(){
    let countlevel;
    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
            .its('length')
            .then((count1) => {
              countlevel=count1;
    cy.log("Element count   :"+countlevel);
    
    for(let j=0;j<countlevel;j++){
        if(j===0){
            cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
            .eq(j).click();
            
cy.get('body > app-root > app-sprint > div > mat-sidenav-container > mat-sidenav-content > div > div.footer.ng-tns-c170-0 > mat-toolbar > div > div',{timeout:10000})
.click();
         
         
          cy.get('.full-width-btns').should('contain','Next activity').click();
          
            cy.go('back') 
            cy.go('back');
            
           
          
          
      
        }
    }
            })
              
        }
        
        activity2(){
          
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
                    cy.wait(2000)
                    cy.get('body > app-root > app-sprint > div > mat-sidenav-container > mat-sidenav-content > div > div.footer.ng-tns-c170-0 > mat-toolbar > div > div',{timeout:100000})
                    .click();
                 
                  cy.get('.full-width-btns').should('contain','Next activity');
                  cy.contains('refresh').should('be.visible').click();
                  cy.get('.full-width-btns').should('contain','Check answer');
                  cy.go('back')
                  cy.go('back')
                  
                  
                }
            }
             
                     })
          
        }
       
        comletedactivity(){
            let completedactcount;
            cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
          .filter('.completed').its('length').then((count)=>{
            completedactcount=count;
            cy.log("the completed activity count "+completedactcount)
            

          })
        }
        activityrefresh(){
         
          this.unit1();
          let countlevel3;
             cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
                     .its('length')
                     .then((count2) => {
                       countlevel3=count2;
            
             for(let j2=0;j2<countlevel3;j2++){
                if(j2===0){
                    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(1) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
                    .eq(j2).click();
                    cy.get('body > app-root > app-sprint > div > mat-sidenav-container > mat-sidenav-content > div > div.footer.ng-tns-c170-0 > mat-toolbar > div > div')
                      .click();        //get started
                  cy.contains('refresh').should('be.visible').click();  //refresh icon
                   cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();   //delete  
                 }
              }
            })
        
        }
        refreshbutton(){
          cy.get('.componentContainer > app-wordselector.ng-star-inserted > .Medium > .word-container > :nth-child(1) > .mat-button-wrapper > .label-wrapper')
          .click();
           cy.get('span').contains('Check answer').click();   //checking answer
              cy.contains('refresh',{timeout:10000}).click();       //refreh page
          //    cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();        //deleteting
            
              
             cy.get('.modal-body').should('exist');
             cy.get('.modal-body').invoke('text').then((text)=>{
             cy.log(text);
         
              cy.get('.mat-focus-indicator').should('exist').click();
           
                
              })
         
            }
        refres(){
          
          cy.get('.componentContainer > app-wordselector.ng-star-inserted > .Medium > .word-container > :nth-child(1) > .mat-button-wrapper > .label-wrapper')
            .click();
          cy.get('.full-width-btns').click();   //check answer
           cy.get(' div > div.footer.ng-tns-c170-0 > mat-toolbar > div > div > button:nth-child(2)').click(); //refresh      //refreh page
          cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();        //deleteting
         cy.get('.componentContainer > app-wordselector.ng-star-inserted > .Medium > .word-container > :nth-child(1) > .mat-button-wrapper > .label-wrapper')
          .click();
          cy.get('span').contains('Check answer').click(); 

        }
    
       
            //
            continue(){
              cy.get('.productCardsContainer > .ProductCardBlock > .card_verticalContent > .pCardBody > :nth-child(4) > .pCardButtonsBlock > .MuiButtonBase-root > .MuiButton-label',{timeout:100000})
    .should('exist').click({force:true});
    cy.get('#levelIndex').click();
    this.unit2();
   
            }
            unit2(){
             
              cy.get(':nth-child(2) > .unitList-overview',{timeout:100000}).should('exist').click();

              let unit2countlevel3; 
              cy.get(':nth-child(2) > .unitList-overview',{timeout:100000})
                 .within(() => {
                  cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion') 
                  .children().its('length').then((len)=>{          // children count of unit1
                     cy.log('the length:'+len)
                     for(let i=0;i<len;i++){
                      if(i==1){
                          cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
                          .children().eq(i).invoke('text').then((text)=>{
                            unit2countlevel3=text;
                              cy.log('the activity part of unit1 text  :' +unit2countlevel3)
                              cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .accordion')
                              .children().eq(i).click();
                          })
                              
                                }
                     
                    }
                     
                     
                     
                   })
               
               })

          
            }
            unit2activity(){
              let unit2activitycount;
              cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
              .its('length').then((count)=>{
                unit2activitycount=count;
                cy.log("unit2activitycount   :"+unit2activitycount)
                for(let i=0;i<unit2activitycount;i++){
                  if(i===0){
                    cy.get('#root > div > div.outer-container > div > div.levelIndex-container > div > ul.unitList-container > li:nth-child(2) > div > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div.MuiPaper-root.MuiAccordion-root.card.Mui-expanded.MuiPaper-elevation1 > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > div > div:nth-child(1) > div > ul').find('li')
             .eq(i).click();
             
                  }
                }
              })
             
            }
unit2activityrefresh(){
  this.unit2activity();
  cy.get('.right > .mat-focus-indicator').click()   //get srarted
  cy.get('.componentContainer > app-choice.ng-star-inserted > .choiceWrapper > .questions > :nth-child(1) > .options-wrapper > :nth-child(1) > .btn').click();
  cy.get('.full-width-btns > .mat-button-wrapper').click();    //check ans

  cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();
  cy.get('.split > .mat-tooltip-trigger > .mat-button-wrapper > .mat-icon').click();
 // cy.get('.componentContainer > app-wordselector.ng-star-inserted > .Medium > .word-container > :nth-child(1) > .mat-button-wrapper > .label-wrapper').click();    //answew
  //cy.get('.full-width-btns > .mat-button-wrapper').click();    //check ans

}
unit2activity2(){
  this.unit2activity();
  cy.get('.right > .mat-focus-indicator').click()   //get srarted
  cy.get('.full-width-btns').click();    //unit2activity2
  cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();   //refresh
  cy.get('.split > .mat-tooltip-trigger').click(); //delete
  cy.get('.full-width-btns > .mat-button-wrapper').click();   //check
  cy.get('.controls > .itemsBar > :nth-child(1)').click();         //ans
  cy.get('.full-width-btns > .mat-button-wrapper').click();   //check
  cy.get('[style="margin-left: inherit;"] > .mat-button-wrapper > .mat-icon').click();   //refresh
  cy.get('.split > .mat-tooltip-trigger').click(); //delete
}
      
//logout
logout(){
    cy.get('.burger-menu > #basic-nav-dropdown',{timeout:10000}).click({force:true});
    cy.contains('Log out').click({force:true});
  }
  logoutsuccess(){
    cy.url().should('eq','https://login.learnship.com/')
 
  }

}
export default activitytest;