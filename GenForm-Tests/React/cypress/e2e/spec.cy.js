import data from "./../../test.json";
const jsonString = JSON.stringify(data);
describe('template spec', () => {
  it('Write the json', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#changeform').type(jsonString, {parseSpecialCharSequences: false})
    cy.get('#submit').click()
  })
  it('Write Fields', () => {
    cy.get('[type="text"]').type('John Doe')
    cy.get('[type="email"]').type('c@c')
    cy.get('[type="password"]').type('123456')
  })
  it('Check Fields', () => {
    cy.get('[type="text"]').should('have.value', 'John Doe')
    cy.get('[type="email"]').should('have.value', 'c@c')
    cy.get('[type="password"]').should('have.value', '123456')
  })
  it('Reset fields', () => {
    cy.get('[type="reset"]').click()
  })
  it('Check Blank Fields', () => {
    cy.get('[type="text"]').should('have.value', '')
    cy.get('[type="email"]').should('have.value', '')
    cy.get('[type="password"]').should('have.value', '')
  })
  it('Submit Values', () => {
    cy.get('[type="text"]').type('John Doe')
    cy.get('[type="email"]').type('c@c')
    cy.get('[type="password"]').type('123456')
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/login')
  })
})
