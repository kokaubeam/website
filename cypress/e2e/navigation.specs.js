describe('Navigation', () => {
  it('should navigation between pages', async () => {
    cy.visit('/')

    cy.getByTestId('header').then(header => {
      cy.getByText(/experience/i, { container: header })
        .click()
        .location('pathname')
        .should('include', 'experience')

      cy.getByText(/stack/i, { container: header })
        .click()
        .location('pathname')
        .should('include', 'stack')

      cy.getByText(/jonathan davis/i, { container: header })
        .click()
        .location('pathname')
        .should('eq', '/')
    })
  })
})
