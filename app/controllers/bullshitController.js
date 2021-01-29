const bullshitFactory = require('../services/bullshitFactory');

/**
 * The main controller responsible for centralizing the bullshit job title middlewares
 */
const bullshitController = {
    /**
     * Middleware in charge of generating job titles
     * User can provide pieces by using query string
     * @param {Express.Request} request - the object representing the request
     * @param {Express.Response} response - the object representing the response
     */
    getBullshitJobTitle: (req, res) => {
        delete req.query.glue;

        const baseBullshit = {... bullshitFactory.generate(), ...req.query};

        res.json(baseBullshit.glue());

    },

    /**
     * Middleware in charge of adding new propositions in the factory
     * Also returns a job title by using these propositions 
     * @param {Express.Request} request - the object representing the request
     * @param {Express.Response} response - the object representing the response
     */
    addPropositions: (req, res) => {
        bullshitFactory.add(req.body);

        delete req.body.glue;

        const baseBullshit = {... bullshitFactory.generate(), ...req.body};

        res.json(baseBullshit.glue());
    }

}

module.exports = bullshitController;