///  <reference types="Cypress" />

describe('Somo Login Tests', function() {

    it('Users can successfully authenticate using valid credentials', function(){

        //Sets layout resolution
        cy.viewport(1920, 1080) 

        //Custom command parametarise site navigation
        //Takes either of the following string arguments: "addRemoveElements", "formAuthentication"
        cy.SomoNavigateToUrl("formAuthentication")

        //Custom command for setting username
        //Takes either of the following string arguments: "valid", "invalid"
        cy.SomoSetUsername("valid")

        //Custom command for setting password
        //Takes either of the following string arguments: "valid", "invalid"
        cy.SomoSetPassword("valid")

        cy.get("#login > button").click()

        //Verifies visibility of the element
        cy.get('i.icon-2x.icon-signout', { timeout: 10000 }).should('be.visible');

        cy.get('h2', { timeout: 10000 }).should('be.visible');

        cy.get('h2').contains("Secure Area");

        cy.get('.flash.success', { timeout: 10000 }).should('be.visible');

        cy.get('.flash.success').contains("You logged into a secure area!");

        cy.url().should('eq', 'http://the-internet.herokuapp.com/secure');

    })

    it('Users can successfully log out of the site', function(){

        //Sets layout resolution
        cy.viewport(1920, 1080) 

        //Custom command to parameterise site navigation
        //Takes either of the following string arguments: "addRemoveElements", "formAuthentication"
        cy.SomoNavigateToUrl("formAuthentication")

        //Custom command for setting username
        //Takes either of the following string arguments: "valid", "invalid"
        cy.SomoSetUsername("valid")

        //Custom command for setting password
        //Takes either of the following string arguments: "valid", "invalid"        
        cy.SomoSetPassword("valid")

        cy.get("#login > button").click()

        //Verifies visibility of the element
        cy.get('i.icon-2x.icon-signout', { timeout: 10000 }).should('be.visible');

        cy.get('i.icon-2x.icon-signout').click()

        cy.get('h2', { timeout: 10000 }).should('be.visible');

        cy.get('h2').contains("Login Page");

        cy.url().should('eq', 'http://the-internet.herokuapp.com/login');

    })

    it('Authentication attempt using invalid credentials is denied', function(){

        //Sets layout resolution
        cy.viewport(1920, 1080) 

        //Custom command to parameterise site navigation
        //Takes either of the following string arguments: "addRemoveElements", "formAuthentication"
        cy.SomoNavigateToUrl("formAuthentication")

        //Custom command for setting username
        //Takes either of the following string arguments: "valid", "invalid"
        cy.SomoSetUsername("invalid")

        //Custom command for setting password
        //Takes either of the following string arguments: "valid", "invalid"
        cy.SomoSetPassword("invalid")

        cy.get("#login > button").click()

        //Verifies visibility of the element
        cy.get('.flash.error', { timeout: 10000 }).should('be.visible');

        cy.get('.flash.error').contains("Your username is invalid!");

        cy.get('h2', { timeout: 10000 }).should('be.visible');

        cy.get('h2').contains("Login Page");

        cy.url().should('eq', 'http://the-internet.herokuapp.com/login');

    })    
})
