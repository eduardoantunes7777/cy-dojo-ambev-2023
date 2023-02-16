/// <reference types="cypress" />

describe('Realizar Cadastro Mensageria', () => {
    it('Realizar Cadastro com email fora dominio', () => {
        cy.visit('https://homolog-hbnfe-portal.ambev.com.br/#!/login')
        cy.get('[ui-sref="solicitacao-cadastro"]').click()
        cy.get('.form-control').type('francisco.antunes@gmail.com')
        cy.get('.btn').click()
        //Busca palava no texto "Olá"
        cy.get('.input-error').invoke('text').should('include', 'que')
    
    });
    it('Realizar Cadastro com email do dominio', () => {
        cy.visit('https://homolog-hbnfe-portal.ambev.com.br/#!/login')
        cy.get('[ui-sref="solicitacao-cadastro"]').click()
        cy.get('.form-control').type('francisco.antunes@ambevtech.com.br')
        cy.get('.btn').click()
        //expressão regular, não precisa colocar o texto todo
        cy.get('.toast').contains(/^Não é possível/)
        
    });
       
});
