describe('Game Board', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.start-game-button').click()
    cy.wait(1000)
  })

  

})   