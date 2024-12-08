/// <reference types="cypress"/> // Reference to use of cypress in this file

// This is where the test are being created. Each on 'it' is a test case
describe('Feature: Login', () => {
    it('Should do success login', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('qa@teste.pt')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click() // You need the parentheses because it is a method. You just don't need any parameters
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, qa-4406 (não é qa-4406? Sair)')
    });
});