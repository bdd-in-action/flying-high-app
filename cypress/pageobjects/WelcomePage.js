/// <reference types="cypress" />

const WELCOME_MESSAGE = '.welcome-message'

export class HomePage {

    open() {
        cy.visit('http://localhost:3000')
    }

    welcomeMessage() {
        return cy.get(WELCOME_MESSAGE)
    }

    loginLink() {
        return cy.get('.welcome-container a').contains('Login')
    }

    registerLink() {
        return cy.get('.welcome-container a').contains('Register')
    }
}
