/// <reference types="cypress" />

describe('share location', () => {
  it('should fetch the user location', () => {
    cy.visit('/').then((win) =>{
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').as('getUserPosition').callsFake((cb)=>{
        setTimeout(()=>{
        cb({
          coords:{
            laititude:37.5,
            longitude:37.5
          },
        });
           
        });
      });
    });
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('@getUserPosition').should('have.been.called');
    cy.get('[data-cy="get-loc-btn"]').should('be.disabled');
    cy.get('[data-cy="actions"]').should('contain','Location fetched');
  });
});
