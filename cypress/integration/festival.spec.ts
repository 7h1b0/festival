describe('Festival website', () => {
  it('allows user to convert currencies in both way', () => {
    cy.visit('/?name=Cypress&rate=1.6&currency=Test');

    cy.findByText('Cypress').should('be.visible');
    cy.findByLabelText(/^Test/).type('12');
    cy.findByLabelText(/^EUR/).should('have.value', '19.2').clear().type('10');
    cy.findByLabelText(/^Test/).should('have.value', '6.25');
  });

  it('allows user to create a festival', () => {
    cy.visit('/');

    cy.findByText('Create a festival').should('be.visible');
    cy.findByLabelText(/^Name/i).type('Javascript');
    cy.findByLabelText(/^Currency/i).type('test');
    cy.findByLabelText(/^rate/i).type('1.5');
    cy.findByText('Submit').click();

    cy.url().should(
      'eq',
      'http://localhost:3000/?name=Javascript&currency=test&rate=1.5',
    );
    cy.findByText('Javascript').should('be.visible');
  });
});
