/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('login')
});

describe('Função Perfil', () => {
    it('Verificar Perfil', () => {
      cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
      cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
      cy.get('.btn-primary').click()
      cy.wait(2000)
      cy.get('.name').click()
      cy.get('.dropdown-menu > :nth-child(1) > a').click()
      cy.get('.title-title').contains('Seu Perfil')
    });

    ///////// COMANDO CUSTOMIZADOS, Codigo mais enxuto
    it('Perfil com comando customizado', () => {
      cy.perfil('francisco.antunes@ambevtech.com.br', 109811)
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });

    it('Perfil com comando customizado - Fixtures', () => {
        cy.fixture('cadastro').then((user) => { 
          cy.perfil(user.email, user.senha)
          })
        cy.contains('HOMOLOGAÇÃO').should('exist')
      });
});