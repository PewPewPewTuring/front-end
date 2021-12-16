describe('Game Board', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000')
    cy.get('.start-game-button').click()
    cy.wait(1000)
  })

  it('User should be see a new header above the game board with the title of the app', () => {
    cy.get('.app-header').contains('Escape the House!')
  })

  it('User should see a game board displayed on the page', () => {
    cy.get('.overlay-tile-grid').should('be.visible')
  })

  it('User should see a timer at the bottom of the page that shows the time elapsed since the beginning of the game', () => {
    cy.clock().tick(1000)
    cy.get('.counter-number').contains(1)
    cy.clock().tick(1000)
    cy.get('.counter-number').contains(2)
    cy.clock().tick(1000)
    cy.get('.counter-number').contains(3)
  })

  it('User should be able to move in any direction', () => {
    // .type('{downarrow}').type('{rightarrow}').type('{uparrow}').type('{leftarrow}')
    cy.window().trigger('keydown', {keyCode: 40})
    cy.wait(200)
    cy.window().trigger('keyup', {keyCode: 40})
    
  })
})