/// <reference types="cypress" />

it('Realizar Perfil', () => {
    cy.visit('https://homolog-hbnfe-portal.ambev.com.br/#!/login')
    cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
    cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
    cy.get('.btn-primary').click()
    cy.wait(2000)
    cy.get('.name').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('.title-title').contains('Seu Perfil')
});