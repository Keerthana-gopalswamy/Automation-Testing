/// <reference types="Cypress"/>

import * as locators from '../locators/loginlogout';
class Api{
// Scenario: user login with valid credintals
url(){
    cy.fixture('learn').then((data1)=>{
        cy.visit(data1.url)

    })
}
extra(){
    cy.get('#close > span').click();
}
userpass(){
    cy.fixture('learn').then((data)=>{
         
        cy.get('h2').should('be.visible') 
        cy.get(locators.username).type(data.UserName)
         cy.get(locators.password).type(data.PassWord)
    })
    
}
loginbutton(){
    
    cy.get(locators.loginbutton).click();
    cy.intercept('POST','https://loginsvc.learnship.com/ssologin').as('halo')
    cy.wait('@halo')
}
halopage(){
    cy.get('.allHeaders',{timeout:10000}).should('be.visible');
}
activecard(){
    this.halopage();
    cy.get(locators.activcard).click({force:true});
}
apigetrequest(){
    cy.request( {
        method:'GET',
        url:'https://reqres.in/api/users'
      }).its('status').should('eq',200)
     
}
apipostrequest(){
     //api post request the status code 
    cy.request({
        method:'POST',
        url:"https://reqres.in/api/users",
        body:{
            "name": "morpheus",
         "job": "leader"
        }
    }).its('status').should('eq',201);
    //api post request save the body value seperately
    const postvalue={
    name: "morpheus",
     job: "leader"
    }
    cy.request({
        method:'POST',
        url:"https://reqres.in/api/users",
        body:postvalue
    }).then((Response)=>{
        expect(Response.status).to.eq(201)
        expect(Response.body.job).to.eq("leader")
        expect(Response.body.name).to.eq("morpheus")

    })

}
apiputrequest(){
    cy.request({
        method:'PUT',
        url:"https://reqres.in/api/users/2",
        body:{
            "name": "morpheus",
            "job": "zion resident"
        }
    }).its('status').should('eq',200)

}
apideleterequest(){
    cy.request('DELETE','https://reqres.in/api/users/2')
    .its('status').should('eq',204)
}
apirequest(){
    this.apigetrequest();
    this.apipostrequest();
    this.apiputrequest();
    this.apideleterequest();
}
continue(){
    cy.request('POST','https://portal-api.learnship.com/graphql')
    .its('status').should('eq','200')
}
hompage(){
    cy.get('.activeItem > a',{timeout:10000}).should('be.visible')
}
//logout successfully
logoutbutton(){
    cy.get(locators.logout).click();
    cy.contains('Log out').click();
}
logoutsuccess(){
   // cy.url().should('eq','https://login.learnship.com/');
   cy.fixture('learn').then((data2)=>{
    cy.url().should('eq',data2.url)
    

})
}
}
export default Api;