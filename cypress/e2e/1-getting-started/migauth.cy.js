/// <reference types="cypress" />

import "cypress-ntlm-auth/dist/commands";

describe('Logging In - NTLM', function () {
  
  context('cy.visit', () => {

    const wait_time = 1000

    it('NTLM login', () => {
      cy.ntlmSso(["win-mm8glctgeq2.migraven.ir"])
      cy.ntlm(["win-mm8glctgeq2.migraven.ir"], "administrator", "MIG@rasht.2024");
      
    })

    it('Home page',()=>{

      cy.visit("http://win-mm8glctgeq2.migraven.ir");

      cy.wait(wait_time)
    
    })

    it('Open Sidebar',()=>{

      

      cy.visit("http://win-mm8glctgeq2.migraven.ir");
      cy.get('#left-navigation-buttons svg').trigger('mouseover')
      cy.get('#left-navigation-buttons svg').click()

      cy.wait(wait_time)

      cy.get(".navigation-category").eq(0).click()
      cy.wait(wait_time)
      cy.get(".navigation-category").eq(1).click()
      cy.wait(wait_time)
      cy.get(".navigation-category").eq(2).click()
      cy.wait(wait_time)
      // cy.get(".navigation-category").eq(3).click()
      // cy.wait(wait_time)
      // cy.get(".navigation-category").eq(4).click()
      // cy.wait(wait_time)
      // cy.get(".navigation-category").eq(5).click()
      // cy.wait(wait_time)
      // cy.get(".navigation-category").eq(6).click()
      // cy.wait(wait_time)
      // cy.get(".navigation-category").eq(7).click()
      // cy.wait(wait_time)
      // cy.get(".navigation-category").eq(8).click()
      // cy.wait(wait_time)


    })




    /*it('Click My Folders',()=>{

            cy.visit("http://win-mm8glctgeq2.migraven.ir");
            cy.get(".navigation-category").eq(0).click()
            cy.get(".navigation-category").eq(1).click()
            cy.get(".navigation-category").eq(2).click()
            cy.get(".navigation-category").eq(3).click()
            //cy.get('#left-navigation-buttons svg').trigger('mouseover')
            //cy.get('#left-navigation-buttons svg').click()
            //cy.get('a[href="javascript:viewer(\'/Home/_StartAsReact\', true);"]')
            //cy.get('span').contains('My Folders').parent().parent().parent().click()
          })*/

  })

})

/*describe('Open My Folders', function () {
  
  context('cy.visit', () => {

  
    it('Click My Folders',()=>{

//      cy.visit("http://win-mm8glctgeq2.migraven.ir");
      cy.get('#left-navigation-buttons svg').trigger('mouseover')
      cy.get('#left-navigation-buttons svg').click()
      cy.get('span').contains('My Folders').click()
    })
  })

})*/

/*describe('Page open', function () {
  // we can use these values to log in
  const username = 'migraven\\administrator'
  const password = 'MIG@rasht.2024'


  context('cy.visit', () => {



    it('Home page',()=>{

      //cy.get('.navigation-category').trigger('mouseover')
      cy.get('[id^=navigation-buttons-]').click()
      //cy.get('[id=navigation-buttons]').click()
    })

    
  })
})*/
