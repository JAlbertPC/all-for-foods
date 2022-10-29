describe('App test', () => {
    it('loads the landing page', () => {
      cy.visit('http://localhost:3333/')
    })

    it('has a clickable button', () => {
        cy.get('#ingSearchB').click()
    })
})