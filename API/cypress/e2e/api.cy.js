describe('API test', () => {

  let petId = 0;

    it('should create a new pet baseed on fixtures', () => {
      const id = 0;
      cy.fixture('pet.json').then((jsonPet) => {
        cy.request({
          method: "POST", 
          url: "/pet", 
          body: 
          jsonPet, 
          headers: {
          'Content-Type': 'application/json' // define el tipo de contenido como JSON
        }
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          cy.log(response.body.id);
          petId = response.body.id; 
        });
      });
    });

    it("should get the latest created pet", () => {
      cy.fixture('pet.json').then((petJson) => {
        cy.request({
          method: "GET", 
          url: "/pet/"+petId,  
          headers: {
          'Content-Type': 'application/json' // define el tipo de contenido como JSON
        }
      })
        .then((response) => {
          cy.log(response.body);
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eqls(petJson.name);
          cy.log(response);
        });
      });
    });

    it("should update the latest created pet", () => {
      cy.fixture('updatePet.json').then((petJson) => {
        cy.request({
          method: "PUT", 
          url: "/pet",  
          headers: {
          'Content-Type': 'application/json' // define el tipo de contenido como JSON
        }
      })
        .then((response) => {
          cy.log(response.body);
          expect(response.status).to.eq(200);
          expect(response.body.name).to.eqls(petJson.name);
          cy.log(response);
        });
      });
    });
  });
  