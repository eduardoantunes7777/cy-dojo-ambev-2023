/// <reference types="cypress" />
require('cy-verify-downloads').addCustomCommand();

beforeEach(() => {
    cy.visit('consulta-emitidos')
});

describe('Função Nota', () => {
    it('Consultar Nota', () => {
      cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
      cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
      cy.get('.btn-primary').click()
      cy.get('[ng-if="RL_LST_NFE_EMIT"] > a').click()
      cy.get(':nth-child(1) > .authorized > .ng-scope > .checkbox-custom-label-table').click()
      cy.get('.footer-col-3 > .export-pdf > img').click()
      cy.contains('HOMOLOGAÇÃO').should('exist')
      //cy.verifyDownload('23230256228356007306550100000014994123456885.zip');
    });

    ///////// COMANDO CUSTOMIZADOS, Codigo mais enxuto
    it('Consulta Nota com comando customizado', () => {
      cy.consultanota('francisco.antunes@ambevtech.com.br', 109811)
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });

    it('Consulta Nota com comando customizado - Fixtures', () => {
      cy.fixture('cadastro').then((user) => { 
        cy.consultanota(user.email, user.senha)
        })
      cy.contains('HOMOLOGAÇÃO').should('exist')
    });
});