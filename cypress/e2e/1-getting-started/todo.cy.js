/// <reference types="cypress" />

describe('Logging In - Basic Auth', function () {
  // we can use these values to log in
  const username = 'migraven\administrator'
  const password = 'MIG@rasht.2024'

  context('cy.request', () => {
    // https://on.cypress.io/request

    it('without authorization gets 401', () => {
      cy.request({
        url: 'http://win-mm8glctgeq2.migraven.ir/',
        failOnStatusCode: false,
      }).its('status').should('equal', 401)
    })

    it('with authorization', () => {
      cy.request({
        url: 'http://win-mm8glctgeq2.migraven.ir/',
        auth: {
          username, password,
        },
      }).its('status').should('equal', 200)
    })

    it('can post', () => {
      cy.request({
        url: '/echo',
        method: 'POST',
        auth: {
          username, password,
        },
        body: {
          text: 'ping!',
        },
      }).then((response) => {
        expect(response.status, 'status').to.equal(200)
        expect(response.body).to.deep.equal({
          text: 'ping!',
        })
      })
    })
  })

  context('cy.visit', () => {
    // https://on.cypress.io/visit

    it('loads the page using basic auth', () => {
      cy.visit('http://win-mm8glctgeq2.migraven.ir/', {
        auth: {
          username,
          password,
        },
      })

      // confirm that all static resources have loaded
      cy.get('#app-message').should('not.be.empty')
      cy.log('app.js loaded')

      cy.contains('h1', 'Red').should('have.css', 'color', 'rgb(255, 0, 0)')
      cy.log('app.css loaded')
    })
  })
})
