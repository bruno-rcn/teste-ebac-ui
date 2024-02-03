/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

// Describe é a função que representa a funcionalidade e o it são os cenarios de teste
describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    // faker aqui ira sempre criar um email diferente
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('EbacTeste@Br24')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('exist')
    });    

    it('Deve completar o cadastro com sucesso - Usando variaveis', () => {
        var email = faker.internet.email()
        var senha = 'EbacTeste@Br24'

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('exist')
    }); 

});