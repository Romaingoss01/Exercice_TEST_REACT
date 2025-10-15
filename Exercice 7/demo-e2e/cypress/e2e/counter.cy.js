

describe("App React compteur , test E2E",() => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/")
    })

    it("affiche le titre et la valeur initial du compteur",() => {
        cy.contains('h1',/app react/i).should('be.visible')
        cy.get('[data-testid="count-value"]').should('contain.text','0')
    })

    it("incrementation du compteur",() => {
        cy.contains('button',/incrementer/i).click()
        cy.get('[data-testid="count-value"]').should('contain.text','1')
    })

    it("reinitialise le compteur",() => {
        cy.contains('button',/incrementer/i).click()
        cy.contains('button',/incrementer/i).click()
        // on reset
        cy.contains('button',/reset/i).click()
        cy.get('[data-testid="count-value"]').should('contain.text','0')
    })
})