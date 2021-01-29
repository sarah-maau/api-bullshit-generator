const { Router } = require('express');
const router = Router();

const bullshitController = require('./controllers/bullshitController');

/**
 * Generates a random bullshit job title, with the possibility of adding sentence segments
 * @route GET /bullshit
 * @group Bullshit - bullshit job title generation
 * @param {string} adjective.query - the adjective can be provided
 * @param {string} sector.query - the sector can be provided
 * @param {string} position.query - the position can be provided
 * @returns {string} 200 - the job title generated
 */
router.get('/bullshit', bullshitController.getBullshitJobTitle);

/**
 * Adds sentence segments' propositions and generates a job title whith those
 * @route POST /bullshit
 * @group Bullshit - bullshit job title generation
 * @param {string} adjective.body -the adjective can be provided
 * @param {string} sector.body - the sector can be provided
 * @param {string} position.body - the position can be provided
 * @returns {string} 200 - the job title generated
 */
router.post('/bullshit', bullshitController.addPropositions);

module.exports = router;