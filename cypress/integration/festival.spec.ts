describe('Festival website', () => {
  it('allows user to choose between festivals', () => {
    cy.visit('/');

    cy.findByLabelText('menu').click();
    cy.findByText('Tomorrowland 2019').click();

    cy.findByText('1 Pearl = 1.6 EUR').should('be.visible');
    cy.findByLabelText(/^Pearl/).type('12');
    cy.findByLabelText(/^EUR/).should('have.value', '19.2');

    cy.findByLabelText('menu').click();
    cy.findByText('Mysteryland 2019').click();

    cy.findByText('1 Token = 3 EUR').should('be.visible');
    cy.findByLabelText(/^Token/).type('3');
    cy.findByLabelText(/^EUR/).should('have.value', '9');

    cy.findByLabelText('menu').click();
    cy.findByLabelText('Close').click();

    cy.findByLabelText(/^Token/).should('have.value', '3');
    cy.findByLabelText(/^EUR/).should('have.value', '9');
  });

  it('allows user to convert currencies in both way', () => {
    cy.visit('/');

    cy.findByLabelText('menu').click();
    cy.findByText('Tomorrowland 2019').click();

    cy.findByLabelText(/^Pearl/).type('12');
    cy.findByLabelText(/^EUR/).should('have.value', '19.2').clear().type('10');
    cy.findByLabelText(/^Pearl/).should('have.value', '6.25');
  });

  it('remembers the last Festival used', () => {
    cy.visit('/');
    cy.findByText('Rock Werchter 2019').should('be.visible');

    cy.findByLabelText('menu').click();
    cy.findByText('Mysteryland 2019').click();

    cy.reload();
    cy.findByText('Mysteryland 2019').should('be.visible');
  });
});
