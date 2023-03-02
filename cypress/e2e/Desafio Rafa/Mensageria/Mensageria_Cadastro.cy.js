/// <reference types="cypress" />
import cadastros from "../../../fixtures/cadastro.json"

const faker = require ('faker-br');

beforeEach(() => {
    cy.visit('solicitacao-cadastro')
});

describe('Função Cadastro Mensageria', () => {
    it('Realizar Cadastro com email fora dominio', () => {
      cy.wait(2000)
      //criar variavel
      let email = faker.internet.email()
      cy.get('.form-control').type(email)
      cy.get('.btn').click()
      //Busca palava no texto "Notamos"
      cy.get('.input-error').invoke('text').should('include', 'notamos')
      cy.wait(2000)
    });

    it('Realizar Cadastro com email do dominio', () => {
      cy.get('.form-control').type('francisco.antunes@ambevtech.com.br')
      cy.get('.btn').click()
      //expressão regular, não precisa colocar o texto todo
      cy.get('.toast').contains(/^Não é possível/)
    });

    ///////// COMANDO CUSTOMIZADOS, Codigo mais enxuto
    it('Cadastro com comando customizado', () => {
      cy.cadastro('francisco.antunes@ambevtech.com.br')
      cy.get('.toast').contains(/^Não é possível/)
    });

    ///////// COMANDO Fixtures, Codigo mais enxuto
    it('Cadastro com comando customizado - Fixtures', () => {
      cy.fixture('cadastro').then((user) => { 
        cy.cadastro(user.email, user.senha)
        })
      cy.get('.toast').contains(/^Não é possível/)
    });  
    
    ///////// COMANDO Importação, Codigo mais enxuto
    it.only('Realizar Cadastro usando importação', () => {
      cy.cadastro(cadastros.email, cadastros.senha)
      cy.get('.toast').contains(/^Não é possível/)
    })
});
