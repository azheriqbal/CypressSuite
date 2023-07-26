/// <reference types="Cypress" />


describe('Task Page', () => {

  beforeEach(('loading the page'),() => {
    cy.visit('http://localhost:5173');
  })

  it('should render the main image', () => {
    cy.get('.main-header').find('img');
    //    cy.get('.main-header img');
  })

  it('should display the page title', () => {
      cy.get('h1').contains('React Tasks');
      cy.get('h1').should('have.length',1);
  });
})