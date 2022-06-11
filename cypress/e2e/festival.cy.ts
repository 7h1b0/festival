describe('Festival website', () => {
  it('allows user to convert currencies in both way', () => {
    cy.visit('/?name=Cypress&rate=1.6&currency=Test');

    cy.findByRole('heading', { name: 'Cypress' }).should('be.visible');
    cy.findByRole('spinbutton', { name: /^Test/ }).type('12');
    cy.findByRole('spinbutton', { name: /^EUR/ })
      .should('have.value', '19.2')
      .clear()
      .type('10');
    cy.findByRole('spinbutton', { name: /^Test/ }).should('have.value', '6.25');
  });

  it('allows user to create a festival', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: 'Create a festival' }).should(
      'be.visible',
    );
    cy.findByRole('textbox', { name: /^Name/i }).type('$$');
    cy.findByRole('textbox', { name: /^Currency/i }).type('test');
    cy.findByRole('spinbutton', { name: /^rate/i }).type('1.5');
    cy.findByRole('button', { name: 'Submit' }).click();

    cy.findByRole('textbox', { name: /^Name/i })
      .then(($el) => {
        const nativeElement = $el.get(0) as HTMLInputElement;
        return nativeElement.checkValidity();
      })
      .should('be.false');

    cy.findByRole('textbox', { name: /^Name/i }).clear().type('Javascript');
    cy.findByRole('button', { name: 'Submit' }).click();

    cy.url().should(
      'eq',
      `${Cypress.config('baseUrl')}/?name=Javascript&currency=test&rate=1.5`,
    );
    cy.findByRole('heading', { name: 'Javascript' }).should('be.visible');
  });

  // Only Electron allows to read clipboard
  it('allows user to copy url', { browser: 'Electron' }, () => {
    cy.visit('/?name=Cypress&rate=1.6&currency=TS');
    cy.findByRole('button', { name: 'Share' }).click();
    cy.window()
      .then((window) => window.navigator.clipboard.readText())
      .should(
        'eq',
        `${Cypress.config('baseUrl')}/?name=Cypress&rate=1.6&currency=TS`,
      );

    cy.visit('/?name=Clipboard&rate=3&currency=JS');
    cy.findByRole('button', { name: 'Share' }).click();
    cy.window()
      .then((window) => window.navigator.clipboard.readText())
      .should(
        'eq',
        `${Cypress.config('baseUrl')}/?name=Clipboard&rate=3&currency=JS`,
      );
  });
});
