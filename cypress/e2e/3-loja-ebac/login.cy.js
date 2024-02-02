/// <reference types="cypress"/>

// Describe é a função que representa a funcionalidade e o it são os cenarios de teste
describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('bruno.teste@ebac.com.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'bruno.teste-9138')

    });    
});