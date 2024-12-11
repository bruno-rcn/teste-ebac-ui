/// <reference types="cypress"/> // Reference to use of cypress in this file

import { faker } from '@faker-js/faker';

describe('Feature: Signin up', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    })

    afterEach(() => {
        cy.screenshot()
    });

    it('Signin', () => {

        var lastName = faker.person.lastName()

        cy.get('#reg_email').type(faker.internet.email()) // generate fake email
        cy.get('#reg_password').type('123456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(lastName) // using variables

        cy.wait(5000) // wait for 5 seconds before continue the script
    });
});