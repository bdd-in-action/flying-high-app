/// <reference types="cypress" />

import { MenuBar } from "../../pageobjects/MenuBar"
import { HomePage } from "../../pageobjects/WelcomePage"

context('On the welcome page', () => {

    const WELCOME_MESSAGE = '.welcome-message'
    const MENU_BAR = '.operation-section'

    const homePage = new HomePage()
    const menuBar = new MenuBar()

    beforeEach( () => {
        homePage.open()
    })

    describe('visitors should be welcomed to the application', () => {
        it('should show a welcome message', () => {
            homePage.welcomeMessage().should('be.visible')
                                     .should('have.text','Welcome to Flying High')
        })
    })
    describe('visitors should be able to logon to their account or register for a new account', () => {
        it('The login link should be visible', () => {
            homePage.loginLink().should('be.visible')
        })
        it('The registration link should be visible', () => {
            homePage.registerLink().should('be.visible')
        })
    })
    describe('the menu bar', () => {
        it('should contain a login button', () => {
            menuBar.loginButton().should('be.visible').should('be.enabled')
        })
        it('should contain a register button', () => {
            menuBar.registerButton().should('be.visible').should('be.enabled')
        })
    })
})