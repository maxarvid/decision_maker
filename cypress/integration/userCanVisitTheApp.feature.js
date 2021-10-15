describe("User can visit the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to display a welcome message", () => {
    cy.get("[data-cy=greeting]").should("contain.text", "Hello there");
  });
});
