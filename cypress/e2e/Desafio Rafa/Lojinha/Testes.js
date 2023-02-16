/// <reference types="cypress" />

describe ('Lojinha', () => {
    it('Alterar valor do produto', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('[rev="150280"] > .title > a').click()
        cy.get('#produtonome').should('have.value', 'PC 5')
        cy.get('#produtovalor').clear().type('660,00')
        cy.get('button.btn').click()
        cy.get(':nth-child(4) > .grey').click()
        cy.get('[rev="150280"] > p').contains('660,00')
        cy.get('li.collection-item').should('have.length', 83)
    }); 
    it.only('Realizar Login', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('h3').contains('Lista de Produtos')
    });
    it('Total de produtos', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('li.collection-item').should('have.length', 83)
    });

    it('Testando Cadastro', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('.waves-effect').click()
        cy.get('#produtonome').type('Trident')
        cy.get('#produtovalor').type(12.00)
        cy.get('#produtocores').type('Azul')
        cy.get('button.btn').click()
        cy.get('.toast').contains('Produto adicionado com sucesso')
        cy.get(':nth-child(4) > .grey').click()
        cy.get('li.collection-item:last-child > p').contains('12,00')
                
        
    });
    it('Validar item pelo nome', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('body > div:nth-child(3) > div > ul > li.collection-item.avatar').should('have.length', 95)
    });
    it('Exclusão de Produto', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('li.collection-item:last-child > .secondary-content > .material-icons').click()
        cy.get('.toast').contains('Produto removido com sucesso')
    });

    it.only('Logoof Lojinha', () => {
        cy.visit('http://165.227.93.41/lojinha-web/')
        cy.get(':nth-child(2) > .input-field > label').type('admin')
        cy.get(':nth-child(3) > .input-field > label').type('admin')
        cy.get('.btn').click()
        cy.get('#nav-mobile > :nth-child(2) > a').click()
        cy.get('h4').contains('Acessar a Lojinha')
    });
});