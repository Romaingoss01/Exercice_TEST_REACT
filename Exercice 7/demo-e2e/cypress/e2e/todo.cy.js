describe('Todo App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Aucune tâche au départ', () => {
    cy.contains('Aucune tâche').should('be.visible');
  });



  it('ajouter une tâche', () => {
    cy.get('input[placeholder="Nouvelle tâche"]').type('Acheter du pain');
    cy.contains('Ajouter').click();
    cy.contains('Acheter du pain').should('be.visible');
    cy.contains('Aucune tâche').should('not.exist');
  });



  
  it('supprime la tache', () => {

    cy.get('input[placeholder="Nouvelle tâche"]').type('Acheter du pain');
    cy.contains('Ajouter').click();
    cy.contains('Supprimer').click();
    cy.contains('Acheter du pain').should('not.exist');
    cy.contains('Aucune tâche').should('be.visible');
  });

});
