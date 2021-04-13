///  <reference types="Cypress" />

describe('Somo test suite', function() {

    it('integration test', function(){

        //Changes the layout to iphone 6 mobile layout
        cy.viewport(550, 750) 
        cy.viewport('iphone-6') 
        
        //Navigates to the Somo website
        cy.visit("https://develop.somo.us")
        
        //Gets the banner element, and asserts that it contains the correct text
        cy.get('.css-p6jdiq > .chakra-heading').contains("Let us know you agree to cookies")


 
    })

})
