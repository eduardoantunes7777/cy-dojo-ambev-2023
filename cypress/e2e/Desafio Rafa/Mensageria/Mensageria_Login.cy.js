/// <reference types="cypress" />

describe('Realizar Login', () => {
    it('Realizar Login com senha invalida', () => {
        cy.visit('https://homolog-hbnfe-portal.ambev.com.br/#!/login')
        cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
        cy.get(':nth-child(2) > .row-form > .form-control').type(1098111)
        cy.get('.btn-primary').click()
        //expressão regular, não precisa colocar o texto todo
        cy.get('.toast').contains(/^Erro!/)

    });
    it('Realizar Login com senha valida', () => {
        cy.visit('https://homolog-hbnfe-portal.ambev.com.br/#!/login')
        cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
        cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
        cy.get('.btn-primary').click()
        cy.get('.name').contains('francisco.antunes@hbsis.com.br'.toUpperCase())

    });
    
});



