///  <reference types="Cypress" />

//const { eq } = require("cypress/types/lodash")

describe('Somo test suite', function() {

    it('User adds a single element to the page', function(){
        
        //Sets layout resolution
        cy.viewport(1920, 1080) 

        //Custom command to parameterise site navigation
        //Takes either of the following string arguments: "addRemoveElements", "formAuthentication"
        cy.SomoNavigateToUrl("addRemoveElements")
        
        //Clicks on the generate element button
        cy.get('#content > div > button').click()

        //Verifies visibility of the element
        cy.get('button.added-manually', { timeout: 10000 }).should('be.visible');

        //Gets the button element, and asserts that it contains the correct text
        cy.get('button.added-manually').contains("Delete")

        //Checks the number of elements present is correct
        cy.get('button.added-manually').should('have.length', 1)

    })

    it('User adds multiple elements to the page', function(){

        //Sets layout resolution
        cy.viewport(1920, 1080) 
        
        //Custom command to parameterise site navigation
        //Takes either of the following string arguments: "addRemoveElements", "formAuthentication"
        cy.SomoNavigateToUrl("addRemoveElements")
      
        //Clicks on the generate element button
        cy.get('#content > div > button').click()

        //Clicks on the generate element button
        cy.get('#content > div > button').click()

        //Verifies visibility of the element
        cy.get('button.added-manually', { timeout: 10000 }).should('be.visible');

        //Gets the button element, and asserts that it contains the correct text
        cy.get('button.added-manually').contains("Delete")

        //Checks the number of elements present is correct
        cy.get('button.added-manually').should('have.length', 2)


    })

    it('User deletes an element from the page', function(){

        //Sets layout resolution
        cy.viewport(1920, 1080) 
        
        //Custom command to parameterise site navigation
        //Takes either of the following string arguments: "addRemoveElements", "formAuthentication"
        cy.SomoNavigateToUrl("addRemoveElements")
     
        //Clicks on the generate element button
        cy.get('#content > div > button').click()

        //Verifies visibility of the element
        cy.get('button.added-manually', { timeout: 10000 }).should('be.visible');

        //Gets the button element, and asserts that it contains the correct text
        cy.get('button.added-manually').contains("Delete")

        //Checks the number of elements present is correct
        cy.get('button.added-manually').should('have.length', 1)

        cy.get('button.added-manually').click()

        cy.get('button.added-manually').should('have.length', 0)

    })

})


