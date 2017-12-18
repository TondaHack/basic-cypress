describe('Alpiq test', function(){
  it('should load homepage', function(){
    cy.visit('http://www.alpiq.cz/');
    cy.title().should('include', 'Alpiq');
    cy.get('#nav .nav').first().should('contain', 'O společnosti');
  });

  it('should load "O spolecnosti"', function(){
    cy.get('#nav .nav').first().click();
    cy.url().should('eq', 'http://www.alpiq.cz/o-spolecnosti-alpiq/about-alpiq.jsp');
    cy.title().should('include', 'About Alpiq');
    cy.get('h1').should('contain', 'Elektřina společnosti Alpiq pro Českou republiku');
  })

  it('should load "Naše podnikání"', function(){
    cy.get('#submenu a').first().click();
    cy.url().should('eq', 'http://www.alpiq.cz/o-spolecnosti-alpiq/nase-podnikani/our-business.jsp');
    cy.get('h2').should('contain', 'Naši zákazníci');
  })
});