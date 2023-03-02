/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('login')
});

describe('Função Logoof', () => {
    it('Realizar Logoff', () => {
      cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
      cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
      cy.get('.btn-primary').click()
      cy.get('[ng-if="RL_LST_NFE_EMIT"] > a').click()
      cy.wait(2000)
      cy.get('.name').click()
      cy.wait(2000)
      cy.get('.dropdown-menu > :nth-child(2) > a').click()
      cy.get('.title-login').contains('Login')
    });

    ///////// COMANDO CUSTOMIZADOS, Codigo mais enxuto
    it('Logof com comando customizado', () => {
      cy.logof('francisco.antunes@ambevtech.com.br', 109811)
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });

    it('Logof com comando customizado - Fixtures', () => {
      cy.fixture('cadastro').then((user) => { 
        cy.logof(user.email, user.senha)
        })
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });
});