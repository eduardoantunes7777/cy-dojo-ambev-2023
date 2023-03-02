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

//FUNÇÃO CADASTRO
Cypress.Commands.add('cadastro', (email) => {
    cy.get('.form-control').type(email)
    cy.get('.btn').click()
})

//FUNÇÃO Reset Senha
Cypress.Commands.add('resetsenha', (email) => {
    cy.get('.form-control').type(email)
    cy.get('.btn').click()
})

//FUNÇÃO Login
Cypress.Commands.add('login', (email, senha) => {
    cy.get(':nth-child(1) > .row-form > .form-control').type(email)
    cy.get(':nth-child(2) > .row-form > .form-control').type(senha)
    cy.get('.btn-primary').click()
})

//FUNÇÃO Logof
Cypress.Commands.add('logof', (email, senha) => {
    cy.get(':nth-child(1) > .row-form > .form-control').type(email)
    cy.get(':nth-child(2) > .row-form > .form-control').type(senha)
    cy.get('.btn-primary').click()
    cy.get('[ng-if="RL_LST_NFE_EMIT"] > a').click()
    cy.wait(2000)
    cy.get('.name').click()
    cy.wait(2000)
    cy.get('.dropdown-menu > :nth-child(2) > a').click()
})

//FUNÇÃO Perfil
Cypress.Commands.add('perfil', (email, senha) => {
    cy.get(':nth-child(1) > .row-form > .form-control').type(email)
      cy.get(':nth-child(2) > .row-form > .form-control').type(senha)
      cy.get('.btn-primary').click()
      cy.wait(2000)
      cy.get('.name').click()
      cy.get('.dropdown-menu > :nth-child(1) > a').click()
      cy.get('.title-title').contains('Seu Perfil')
})

//FUNÇÃO Consulta Nota
Cypress.Commands.add('consultanota', (email, senha) => {
    cy.get(':nth-child(1) > .row-form > .form-control').type(email)
      cy.get(':nth-child(2) > .row-form > .form-control').type(senha)
      cy.get('.btn-primary').click()
      cy.get('[ng-if="RL_LST_NFE_EMIT"] > a').click()
      cy.get(':nth-child(1) > .authorized > .ng-scope > .checkbox-custom-label-table').click()
      cy.get('.footer-col-3 > .export-pdf > img').click()
      cy.contains('HOMOLOGAÇÃO').should('exist')
})