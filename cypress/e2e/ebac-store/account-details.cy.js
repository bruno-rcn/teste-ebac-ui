/// <reference types="cypress"/>

describe('Feature: Account details', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')

        cy.fixture('profile').then(login => {
            cy.login(login.user, login.password)
        })
    })

    afterEach(() => {
        // cy.screenshot()
    });

    it('Should complete details account with success', () => {
        cy.detailsAccount('Naruto', 'Goku', 'Joel.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')
    });
})