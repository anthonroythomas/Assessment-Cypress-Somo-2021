///  <reference types="Cypress" />

describe('Somo test suite', function() {

    it('integration test', function(){

        cy.viewport(550, 750) 
        cy.viewport('iphone-6') 
        cy.visit("https://develop.somo.us")
        cy.get('.css-p6jdiq > .chakra-heading').contains("Let us know you agree to cookies")


 
    })

})