Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Andressa')
  cy.get('#lastName').type('Rocha')
  cy.get('#email').type('andressa@teste.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()





})