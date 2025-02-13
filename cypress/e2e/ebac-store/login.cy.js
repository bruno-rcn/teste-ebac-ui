/// <reference types="cypress"/> // Reference to use of cypress in this file
const profile = ('../../fixtures/profile.json')

// This is where the test are being created. Each on 'it' is a test case
// Use it.only when you wanna that execute just this specific test
describe('Feature: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    })

    afterEach(() => {
        // cy.screenshot()
    });

    it('Should do success login', () => {
        cy.get('#username').type('qa@teste.pt')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click() // You need the parentheses because it is a method. You just don't need any parameters
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, qa-2153')
    });

    // it.only('Should do success login with data file', () => {
    //      cy.get('#username').type(profile.user)
    //      cy.get('#password').type(profile.password)
    //      cy.get('.woocommerce-form > .button').click()
    //      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, qa-2153')
    // });

    // add the file name in fixtures
     it('Should do success login with fixtures', () => {
         cy.fixture('profile').then(data => {
             cy.get('#username').type(data.user)
             cy.get('#password').type(data.password, {log: false})
             cy.get('.woocommerce-form > .button').click()
             cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, qa-2153')
         })
    });

    it('Should do success login with command', () => {
        cy.login('qa@teste.pt', '123456')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, qa-2153')
    });

    it('Login with wrong email', () => {
        cy.get('#username').type('br@teste.pt')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Login with wrong password', () => {
        cy.get('#username').type('qa@teste.pt')
        cy.get('#password').type('111111')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail qa@teste.pt está incorreta. Perdeu a senha?')
    });
});