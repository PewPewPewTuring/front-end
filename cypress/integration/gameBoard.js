describe('Game Board', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.start-game-button').click()
    cy.wait(1000)
  })

  it('User should be able to move in any direction', () => {

    cy.get('.overlay-container').type('{downarrow}').type('{rightarrow}').type('{uparrow}').type('{leftarrow}')
  })
})