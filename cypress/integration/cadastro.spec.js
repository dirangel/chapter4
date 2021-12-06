/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

//Mocha -> describe, context,
describe('Cadastro', () => {
  before(() => {
    cy.visit('/');
  });
  it('Quando eu informar os dados e finalizar, então cadastro deve ser efetuado', () => {
    cy.get('input[name=firstName]').should('be.visible').type(chance.first());
    cy.get('input[name=lastName]').should('be.visible').type(chance.last());
    cy.get('textarea[name=adress]').should('be.visible').type(chance.address());
    cy.get('input[name=emailAdress]').should('be.visible').type(chance.email());
    cy.get('input[value=n]').should('be.visible').check();
    cy.get('input[type=checkbox]').check('Netflix');
    cy.get('input[type=checkbox]').check('Dormir');
    cy.get('select#countries').select('Dinamarca', { force: true });
    cy.get('select#years').select('2006', { force: true });
    cy.get('select#months').select('Janeiro', { force: true });
    cy.get('select#days').select('5', { force: true });
    cy.get('input#firstpassword').type('Alunos@2021');
    cy.get('input#secondpassword').type('Alunos@2021');
    cy.get('button#submitbtn').click();
    cy.url().should('contain', 'listagem');
  });
});
