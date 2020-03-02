describe('Festival website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('allows user to choose between festivals', () => {
    cy.queryByLabelText('menu').click();
    cy.queryByText('Tomorrowland 2019').click();

    cy.queryByText('1 Pearl = 1.6 EUR').should('exist');
    cy.queryByLabelText(/^Pearl/).type('12');
    cy.queryByLabelText(/^EUR/).should('have.value', '19.2');

    cy.queryByLabelText('menu').click();
    cy.queryByText('Mysteryland 2019').click();

    cy.queryByText('1 Token = 3 EUR').should('exist');
    cy.queryByLabelText(/^Token/).type('3');
    cy.queryByLabelText(/^EUR/).should('have.value', '9');
  });

  it('allows user to convert in both way', () => {
    cy.queryByLabelText('menu').click();
    cy.queryByText('Tomorrowland 2019').click();

    cy.queryByLabelText(/^Pearl/).type('12');
    cy.queryByLabelText(/^EUR/).should('have.value', '19.2');

    cy.queryByLabelText(/^EUR/)
      .clear()
      .type('10');
    cy.queryByLabelText(/^Pearl/).should('have.value', '6.25');
  });
});
