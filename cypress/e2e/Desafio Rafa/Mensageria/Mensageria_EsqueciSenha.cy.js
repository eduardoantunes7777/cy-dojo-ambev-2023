/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('esqueceu-senha')
});

describe('Função Senha', () => {
    it('Alterar Senha', () => {
        //cy.get('[ui-sref="esqueceu-senha"]').click()
        cy.get('.form-control').type('francisco.antunes@ambevtech.com.br')
        cy.wait(2000)
        cy.get('.btn').click()
        //double check de que foi feito o reset
        cy.get('.toast').contains(/^Sucesso/)
        //outra forma de mostrar que realizou o reset de senha
        cy.contains('Sucesso').should('exist')
    });

    ///////// COMANDO CUSTOMIZADOS, Codigo mais enxuto
    it('Reset Senha com comando customizado', () => {
        cy.resetsenha('francisco.antunes@ambevtech.com.br')
        cy.contains('Sucesso').should('exist')
      });

    it('Esqueci Senha com comando customizado - Fixtures', () => {
        cy.fixture('cadastro').then((user) => { 
          cy.resetsenha(user.email, user.senha)
          })
        cy.contains('Sucesso').should('exist')
      });
});