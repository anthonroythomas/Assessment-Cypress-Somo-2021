///  <reference types="Cypress" />

describe('Somo test suite', function() {

    it('integration test', function(){

        //Change the layout to iphone 6
        cy.viewport(550, 750) 
        cy.viewport('iphone-6') 
        
        //Navigate to the Somo website
        cy.visit("https://develop.somo.us")
        
        //Get the banner element and assert that it contains the text required
        cy.get('.css-p6jdiq > .chakra-heading').contains("Let us know you agree to cookies")


 
    })

})
