const fs = require('fs');
const path = require('path');
const { expect } = require('chai');  

// Read the index.js file content
const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8');

describe('index.js', function () {
  // Testing companyName
  describe('companyName', function () {
    const companyName = "Scuber";
    it('is set as Scuber', function () {
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  // Testing mostProfitableNeighborhood
  describe('mostProfitableNeighborhood', function () {
    let mostProfitableNeighborhood = "Chelsea";

    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
    });
  });

  // Testing companyCeo
  describe('companyCeo', function () {
    let companyCeo = "Susan Smith";

    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('is defined using let', function () {
      expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
    });
  });
});
