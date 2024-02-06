/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

// Describe é a função que representa a funcionalidade e o it são os cenarios de teste
describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('bruno.teste@ebac.com.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'bruno.teste-9138')
    });    

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('brun.teste@ebac.com.br')
        cy.get('#password').type('123456')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('bruno.teste@ebac.com.br')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail bruno.teste@ebac.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso - Utilizando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'bruno.teste-9138')
    });   

    it('Deve fazer login com sucesso - Utilizando comando customizado', () => {
        cy.login('bruno.teste@ebac.com.br', '123456')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'bruno.teste-9138')
    });   

});