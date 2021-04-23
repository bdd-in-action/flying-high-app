/// <reference types="cypress" />

const WELCOME_MESSAGE = '.welcome-message'
const WELCOME_CONTAINER = '.welcome-container'

export class WelcomePage {
    open() {
        cy.visit('https://bdd-flyer.herokuapp.com/')
    }

    welcomeMessage() {
        return cy.get(WELCOME_MESSAGE)
    }

    loginLink() {
        return cy.contains(WELCOME_CONTAINER,'Login')
    }

    registerLink() {
        return cy.contains(WELCOME_CONTAINER,'Register')
    }
}