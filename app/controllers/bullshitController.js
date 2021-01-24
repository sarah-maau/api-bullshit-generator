const bullshitFactory = require('../services/bullshitFactory');

const bullshitController = {
    
    getBullshitJobTitle: (req, res) => {
        delete req.query.glue;

        const baseBullshit = {... bullshitFactory.generate(), ...req.query};

        res.json(baseBullshit.glue());

    },

    addPropositions: (req, res) => {
        bullshitFactory.add(req.body);

        delete req.body.glue;

        const baseBullshit = {... bullshitFactory.generate(), ...req.body};

        res.json(baseBullshit.glue());
    }

}

module.exports = bullshitController;