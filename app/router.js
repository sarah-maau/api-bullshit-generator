const { Router } = require('express');
const router = Router();

const bullshitController = require('./controllers/bullshitController');

router.get('/bullshit', bullshitController.getBullshitJobTitle);
router.post('/bullshit', bullshitController.addPropositions);

module.exports = router;