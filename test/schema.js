const { expect } = require('chai');

const bullshitSchema = require('../app/schemas/bullshitSchema');

let mockBullshit;
let mockNum;

describe('Bullshit schema', function() {

    before(function() {

        // l'objet à valider
        mockBullshit = {
            adjective: "Future",
            sector: "Markekting",
            position: "Analyst",
        };

        mockNum = {
            adjective: 1,
            sector: 2,
            position: 3
        }
    });

    it('should validate a valid Job title', function() {
        // valider un schéma valide, ça fonctionne
        expect(bullshitSchema.validate(mockBullshit)).not.to.have.property('error');

    });

    it('should not valid Job title', function() {
        // valider un schéma valide, ça fonctionne
        expect(bullshitSchema.validate(mockNum)).to.have.property('error');

    });

    it('should not validate a Job title with an ajdective less than 2 characters long', function() {

        // valider un schéma invalide retourne une erreur
        mockBullshit.adjective = "A";

        const validation2 = bullshitSchema.validate(mockBullshit);

        expect(validation2).to.have.property('error'); 
        expect(validation2.error.details[0].path[0]).to.equal('adjective');
    });

    it('should not validate a Job title with a sector less than 2 characters long', function() {

        // valider un schéma invalide retourne une erreur
        mockBullshit.adjective = "longer enough";
        mockBullshit.sector = "B";

        const validation3 = bullshitSchema.validate(mockBullshit);

        expect(validation3).to.have.property('error'); 
        expect(validation3.error.details[0].path[0]).to.equal('sector');
    });

    it('should not validate a Job title with a position less than 2 characters long', function() {

        // valider un schéma invalide retourne une erreur
        mockBullshit.sector = "longer enough";
        mockBullshit.position = "C";

        const validation4 = bullshitSchema.validate(mockBullshit);

        expect(validation4).to.have.property('error'); 
        expect(validation4.error.details[0].path[0]).to.equal('position');
    });

});