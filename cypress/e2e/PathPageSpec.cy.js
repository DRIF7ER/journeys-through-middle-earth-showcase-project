describe('PathPageSpec', () => {
  beforeEach(() => {
    cy.intercept('GET','https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbe6/quote', {
      statusCode: 200,
      fixture: 'APIQuoteResponse'
    }).as('AragornTest');

    cy.visit("http://127.0.0.1:5173/")
  });

  it('should have a character\'s route through middle earth', () => {
    cy.viewport(1920, 1362)
    .get(':nth-child(2) > .icon-button').click()
    .get('.dropdown-menu > a').click()
    cy.wait('@AragornTest')
    .get(':nth-child(2) > .icon-button').click()
    .get('.react-transform-wrapper').should('exist')
    .get('.react-transform-wrapper > .react-transform-component').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap > .Aragorn-path').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap > .Aragorn-path > g').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap > .Aragorn-path > g').should('be.visible')
  });

  it('has clickable points of interest with elements', () => {
    cy.viewport(1920, 1362)
    .get(':nth-child(2) > .icon-button').click()
    .get('.dropdown-menu > a').click()
    cy.wait('@AragornTest')
    .get(':nth-child(2) > .icon-button').click()
    .get('.react-transform-wrapper').should('exist')
    .get('.react-transform-wrapper > .react-transform-component').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap > .poi-distribution-container').should('exist')
    .get('.react-transform-wrapper > .react-transform-component > .Aragorn > .svg-path-wrap > .poi-distribution-container > .poi-links-wrap').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-image').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-image').should('be.visible')

    /**
    *^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|*
    *<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<  BREE  >p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>*
    *v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|*
    */

    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container').should('not.be.visible')
    .get('.poi-links-wrap > .Bree-poi-container').click()
    // .get('.poi-links-wrap > .Bree-poi-container').should('exist')
    // cy.wait(1000)
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap').should('exist')
    .get('.description-and-img-wrap > .quote-and-snippet').should('exist')
    .get('.description-and-img-wrap > .quote-and-snippet > .character-quote').should('exist')
    cy.contains('.character-quote', /undefined/, /A Freakin' Quote 1!!!/)
    .get('.description-and-img-wrap > .quote-and-snippet > .deed-display').should('have.length', 3)
    .get('.description-and-img-wrap > .quote-and-snippet > .deed-display > .p-1').invoke('text').should('match', /Before/)
    .get('.description-and-img-wrap > .quote-and-snippet > .deed-display > .p-2').invoke('text').should('match', /In/)
    .get('.description-and-img-wrap > .quote-and-snippet > .deed-display > .p-3').invoke('text').should('match', /After/)
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner').children().should('have.length', 3)
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-1').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-1').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-2').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-2').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-3').should('exist')
    .get('.poi-links-wrap > .Bree-poi-container > .Bree-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-3').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Bree-poi-container').click()

    /**
    *^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|*
    *<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q  WEATHERTOP  p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>*
    *v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|*
    */

    .get('.poi-links-wrap > .Weathertop-poi-container').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-image').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-image').should('be.visible')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container').should('not.be.visible')
    .get('.poi-links-wrap > .Weathertop-poi-container').click()
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container').should('be.visible')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap').should('exist')
    .get('.description-and-img-wrap > .quote-and-snippet').should('exist')
    .get('.description-and-img-wrap > .quote-and-snippet > .character-quote').should('exist')
    cy.contains('.character-quote', /undefined/, /A Freakin' Quote 2!!!/)
    .get('.description-and-img-wrap > .quote-and-snippet > .deed-display').should('have.length', 3)
    .get('.Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .quote-and-snippet > .deed-display > .p-1').invoke('text').should('match', /After/)
    .get('.Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .quote-and-snippet > .deed-display > .p-2').invoke('text').should('match', /After/)
    .get('.Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .quote-and-snippet > .deed-display > .p-3').invoke('text').should('match', /Amon Sûl/)
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner').children().should('have.length', 3)
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-1').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-1').should('be.visible')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-2').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-2').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-3').should('exist')
    .get('.poi-links-wrap > .Weathertop-poi-container > .Weathertop-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-3').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Weathertop-poi-container').click()

    /**
    *^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|*
    *<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q<q  RIVENDELL   p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>p>*
    *v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|v|*
    */

    .get('.poi-links-wrap > .Rivendell-poi-container').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-image').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-image').should('be.visible')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container').should('not.be.visible')
    .get('.poi-links-wrap > .Rivendell-poi-container').click()
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container').should('be.visible')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap').should('exist')
    .get('.description-and-img-wrap > .quote-and-snippet').should('exist')
    .get('.description-and-img-wrap > .quote-and-snippet > .character-quote').should('exist')
    cy.contains('.character-quote', /undefined/, /A Freakin' Quote 3!!!/)
    .get('.description-and-img-wrap > .quote-and-snippet > .deed-display').should('have.length', 3)
    .get('.Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .quote-and-snippet > .deed-display > .p-1').invoke('text').should('match', /After/)
    .get('.Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .quote-and-snippet > .deed-display > .p-2').invoke('text').should('match', /Rivendell/)
    .get('.Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .quote-and-snippet > .deed-display > .p-3').invoke('text').should('match', /Frodo/)
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner').children().should('have.length', 3)
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-1').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-1').should('be.visible')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-2').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-2').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-3').should('exist')
    .get('.poi-links-wrap > .Rivendell-poi-container > .Rivendell-single-poi-container > .single-poi-inner-wrap > .description-and-img-wrap > .poi-img-wrap-outer > .poi-img-wrap-inner > .image-3').scrollIntoView().should('be.visible')
    .get('.poi-links-wrap > .Rivendell-poi-container').click()
  });
})