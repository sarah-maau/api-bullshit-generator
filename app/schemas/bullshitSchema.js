const Joi = require('joi');

const bullshitSchema = Joi.object({
    adjective: Joi.string().min(2),
    sector: Joi.string().min(2),
    position: Joi.string().min(2)
});

module.exports = bullshitSchema;