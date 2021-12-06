/// <reference types="cypress" />

describe('Listagem', () => {
  it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
    cy.fixture('listagem-vazia').then((conteudo) => {
      window.localStorage.setItem('data', JSON.stringify(conteudo));
    });
    cy.visit('https://form-agilizei.netlify.app/listagem.html');
    //deve conter o tamanho
    cy.get('table tbody tr').should('have.length', 0);
  });
  it('Quando houver um ou mais cadastro, então a listagem deve exibir cada registro', () => {
    cy.fixture('listagem-com-itens').then((conteudo) => {
      window.localStorage.setItem('data', JSON.stringify(conteudo));
    });
    cy.visit('https://form-agilizei.netlify.app/listagem.html');
    cy.get('table tbody tr').should('have.length', 2);
  });
});
