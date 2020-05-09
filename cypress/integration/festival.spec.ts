describe('Festival website', () => {
  it('redirects user to the first festival or the last festival used', () => {
    cy.visit('/');
    cy.findByText('Rock Werchter 2019').should('be.visible');

    cy.findByLabelText('menu').click();
    cy.findByText('Mysteryland 2019').click();

    cy.visit('/');
    cy.findByText('Mysteryland 2019').should('be.visible');
  });

  it('redirects user to Not-found page when a slug is unknow', () => {
    localStorage.setItem('lastUsedFestival', 'fake-festival');
    cy.visit('/');
    cy.findByText('Festival not found').should('be.visible');
    cy.findByText('Return home').click();
    cy.findByText('Rock Werchter 2019').should('be.visible');

    cy.visit('/fake-festival');
    cy.findByText('Festival not found').should('be.visible');
  });

  it('allows user to choose between festivals', () => {
    cy.visit('/tomorrowland-2019');

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
    cy.visit('/tomorrowland-2019');

    cy.findByLabelText(/^Pearl/).type('12');
    cy.findByLabelText(/^EUR/).should('have.value', '19.2').clear().type('10');
    cy.findByLabelText(/^Pearl/).should('have.value', '6.25');
  });
});
