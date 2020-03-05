describe('Festival website', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('allows user to choose between festivals', () => {
    cy.visit('/');

    cy.queryByLabelText('menu').click();
    cy.queryByText('Tomorrowland 2019').click();

    cy.queryByText('1 Pearl = 1.6 EUR').should('be.visible');
    cy.queryByLabelText(/^Pearl/).type('12');
    cy.queryByLabelText(/^EUR/).should('have.value', '19.2');

    cy.queryByLabelText('menu').click();
    cy.queryByText('Mysteryland 2019').click();

    cy.queryByText('1 Token = 3 EUR').should('be.visible');
    cy.queryByLabelText(/^Token/).type('3');
    cy.queryByLabelText(/^EUR/).should('have.value', '9');

    cy.queryByLabelText('menu').click();
    cy.queryByLabelText('Close').click();

    cy.queryByLabelText(/^Token/).should('have.value', '3');
    cy.queryByLabelText(/^EUR/).should('have.value', '9');
  });

  it('allows user to convert in both way', () => {
    cy.visit('/');

    cy.queryByLabelText('menu').click();
    cy.queryByText('Tomorrowland 2019').click();

    cy.queryByLabelText(/^Pearl/).type('12');
    cy.queryByLabelText(/^EUR/)
      .should('have.value', '19.2')
      .clear()
      .type('10');
    cy.queryByLabelText(/^Pearl/).should('have.value', '6.25');
  });

  it('remembers the last Festival used', () => {
    cy.visit('/');
    cy.queryByText('Rock Werchter 2019').should('be.visible');

    cy.window()
      .its('localStorage')
      .then(localStorage => {
        localStorage.setItem('lastUsedFestival', '2');
      });

    cy.reload();
    cy.queryByText('Tomorrowland 2019').should('be.visible');

    cy.queryByLabelText('menu').click();
    cy.queryByText('Mysteryland 2019')
      .click()
      .should(() => {
        expect(localStorage.getItem('lastUsedFestival')).to.equal('3');
      });
  });
});
