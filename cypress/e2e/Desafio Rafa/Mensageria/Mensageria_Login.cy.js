/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('login')
});

describe('Função Login', () => {
    it('Realizar Login com senha invalida', () => {
      cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
      cy.get(':nth-child(2) > .row-form > .form-control').type(1098111)
      cy.get('.btn-primary').click()
      //expressão regular, não precisa colocar o texto todo
      cy.get('.toast').contains(/^Erro!/)

    });
    
    it('Realizar Login com senha valida', () => {
      cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
      cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
      cy.get('.btn-primary').click()
      cy.get('[ng-if="RL_LST_NFE_EMIT"] > a').click()
      cy.wait(2000)
      cy.get('[ng-if="RL_DASHBOARD_RECEBIDOS && isAmbev"] > a').click()
      cy.wait(2000)
      cy.get('.name').contains('francisco.antunes@hbsis.com.br'.toUpperCase())
    });

    ///////// COMANDO CUSTOMIZADOS, Codigo mais enxuto
    it('Login com comando customizado', () => {
      cy.login('francisco.antunes@ambevtech.com.br', 109811)
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });

    it('Login com comando customizado - Fixtures', () => {
      cy.fixture('cadastro').then((user) => { 
        cy.login(user.email, user.senha)
        })
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });
  });