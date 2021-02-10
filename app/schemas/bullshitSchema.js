const Joi = require('joi');

const bullshitSchema = Joi.object({
    ajective: Joi.string(),
    sector: Joi.string(),
    position: Joi.string()
});

module.exports = bullshitSchema;