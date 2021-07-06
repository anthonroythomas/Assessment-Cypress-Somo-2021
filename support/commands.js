// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//Custom command to select the url used for navigation
//Returns nothing
Cypress.Commands.add('SomoNavigateToUrl', (url) => {
    
    switch (url) {
        case 'addRemoveElements':
            cy.visit("http://the-internet.herokuapp.com/add_remove_elements/")
          break;
     
        case 'formAuthentication':
            cy.visit("http://the-internet.herokuapp.com/login")
          break;
     
        default:
          cy.log("error selecting url")
    }

})

//Custom command to select the url used for navigation
//Returns nothing
Cypress.Commands.add('SomoSetUsername', (validity) => {

        cy.get("#content > div > h4 > em:nth-child(1)").then(($txt) => {

            const txt = $txt.text()


            switch (validity) {
                case 'valid':
                    cy.get('#username').type(txt)
                  break;
             
                case 'invalid':
                    cy.get('#username').type("iaminvalid")
                  break;
             
                default:
                  cy.log("error selecting username")
            }

        })

})



//Custom command to set password on for the web app
//Returns nothing
Cypress.Commands.add('SomoSetPassword', (validity) => {

        cy.get("#content > div > h4 > em:nth-child(2)").then(($txt) => {

            const txt = $txt.text()

            switch (validity) {
                case 'valid':
                    cy.get('#password').type(txt)
                  break;
             
                case 'invalid':
                    cy.get('#password').type("iaminvalid")
                  break;
             
                default:
                  cy.log("error selecting username")
            }

        })

})