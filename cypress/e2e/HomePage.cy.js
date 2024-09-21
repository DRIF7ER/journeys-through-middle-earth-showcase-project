describe('Home page spec', () => {
  beforeEach(() => {
    cy.intercept('GET','https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbe6/quote', {
      statusCode: 200,
      fixture: 'APIQuoteResponse'
    }).as('AragornTest');

    cy.visit("http://127.0.0.1:5173/")
  });

  it('has a landing page with elements', () => {
    cy.get('#nav-bar-list-id').should('exist')
    .get('.home-link > #nav-bar-item-id').should('exist')
    .get('.home-link > #nav-bar-item-id > .icon-button').should('exist')
    .get('.home-link > #nav-bar-item-id > .icon-button > .link-img').should('exist')
    .get('#nav-bar-list-id > :nth-child(2)').should('exist')
    .get(':nth-child(2) > .icon-button').should('exist')
    .get(':nth-child(2) > .icon-button > .link-img').should('exist')
    .get(':nth-child(2) > .icon-button').click()
    .get('.dropdown-menu').should('exist')
    .get('.dropdown-menu > a').should('exist')
    .get('.dropdown-menu > a > .menu-item').should('exist')
    .get('.dropdown-menu > a > .menu-item > .dropdown-icon-img').should('exist')
    .get('.dropdown-menu > a > .menu-item > .icon-button-name').should('exist')
    .get('.dropdown-menu > a > .menu-item > .icon-button-name').contains('Aragorn')
    .get(':nth-child(2) > .icon-button').click()
    .get('.react-transform-wrapper').should('exist')
    .get('.react-transform-wrapper > .react-transform-component').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .home-outer-container').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .home-outer-container > .home-inner-container').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .home-outer-container > .home-inner-container > .please-select').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .home-outer-container > .home-inner-container > .please-select').contains('^^^^ Please Select A Character To Begin...')
    .get('.map-wrap').should('exist')
    .get('.map-wrap > .middle-earth-map').should('exist')
    .get('.map-controls').should('exist')
    .get('.map-controls > .zoom-in').should('exist')
    .get('.map-controls > .zoom-in').contains('+')
    .get('.map-controls > .reset-zoom').should('exist')
    .get('.map-controls > .reset-zoom').contains('x')
    .get('.map-controls > .zoom-out').should('exist')
    .get('.map-controls > .zoom-out').contains('-')
  });
})