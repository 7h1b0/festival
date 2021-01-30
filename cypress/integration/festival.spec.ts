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
    cy.findByLabelText(/^Name/i).type('$$');
    cy.findByLabelText(/^Currency/i).type('test');
    cy.findByLabelText(/^rate/i).type('1.5');
    cy.findByText('Submit').click();

    cy.findByText('Form is invalid').should('be.visible');
    cy.findAllByLabelText('close').click();
    cy.findByText('Form is invalid').should('not.exist');

    cy.findByLabelText(/^Name/i).clear().type('Javascript');
    cy.findByText('Submit').click();

    cy.url().should(
      'eq',
      'http://localhost:3000/?name=Javascript&currency=test&rate=1.5',
    );
    cy.findByText('Javascript').should('be.visible');
  });

  // Only Electron allows to read clipboard
  it('allows user to copy url', { browser: 'Electron' }, () => {
    cy.visit('/?name=Cypress&rate=1.6&currency=TS');
    cy.findByLabelText('Share').click();
    cy.window()
      .then((window) => window.navigator.clipboard.readText())
      .should('eq', 'http://localhost:3000/?name=Cypress&rate=1.6&currency=TS');

    cy.visit('/?name=Clipboard&rate=3&currency=JS');
    cy.findByLabelText('Share').click();
    cy.window()
      .then((window) => window.navigator.clipboard.readText())
      .should('eq', 'http://localhost:3000/?name=Clipboard&rate=3&currency=JS');
  });
});
