/// <reference types="cypress" />
require('cy-verify-downloads').addCustomCommand();

it('Consultar Nota', () => {
    cy.visit('https://homolog-hbnfe-portal.ambev.com.br/#!/login')
    cy.get(':nth-child(1) > .row-form > .form-control').type('francisco.antunes@hbsis.com.br')
    cy.get(':nth-child(2) > .row-form > .form-control').type(109811)
    cy.get('.btn-primary').click()
    cy.get('[ng-if="RL_LST_NFE_EMIT"] > a').click()
    //cy.get(':nth-child(1) > .authorized > .ng-scope > .checkbox-custom-label-table').click()
    //cy.get('.footer-col-3 > .export-pdf > img').click()
    //cy.verifyDownload('23230256228356007306550100000014994123456885.zip');
});