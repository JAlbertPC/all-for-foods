describe('App test', () => {
  it('loads the landing page', () => {
    cy.visit('http://localhost:3333/')
  })

  it('has a clickable button', () => {
    cy.get('#ingSearchB').click()
  })


  it('Alert text is ¡A cocinar!', () => {

    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get("button").click().then(() => {
      console.log("WTF", stub.getCall(0));
      expect(stub.getCall(0)).to.be.calledWith('¡A cocinar!')
    })

  })


})