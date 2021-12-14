describe('Landing Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('User should see the app title and a description of the app', () => {
    cy.get('.title').contains('Welcome to Escape the House!')
    cy.get('.summary').contains('Looking for a way to break up the motonony of your day? Not ')
  })

  it('User should see a a heading above a table.  The table should list 10 leaders with a player name and their score.', () => {
    cy.get('.title-2').contains('Leaderboard')
    cy.get('.leaderboard-table').children().should('have.length', 11)
    cy.get('.leaderboard-header').first().contains('Player Name')
    cy.get('.leaderboard-header').last().contains('Score')
    // Possibly iterate through each table element and check whether it has a name and score
  })
})