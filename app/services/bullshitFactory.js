const pluralize = require('pluralize');

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const randomInArray = list => {
    return list[random(0, list.length)];
};

/**
 * The bullshit job title generator: generates a random job title made of 3 "pieces"
 * @name Bullshit
 * @typedef {Bullshit} Bullshit
 * @property {string} adjective - the job title's adjective
 * @property {string} sector - the job title's sector
 * @property {string} position - the job title's position
 * @method glue
 */

/**
 * Factory to build random job title
 * @requires "data/parts.json"
 */
const bullshitFactory = {
    data: require('../../data/bullshitJt.json'),
    
    /**
     * Returns a random adjective among several proposals
     * @returns {String} the adjective chosen by the proposals
    */
    randomAdjective: () => randomInArray(bullshitFactory.data.adjectives),

    /**
     * Returns a random sector among several proposals
     * @returns {String} the sector chosen by the proposals
    */
    randomSector: () => randomInArray(bullshitFactory.data.sectors),

    /**
     * Returns a random position among several proposals
     * @returns {String} the position chosen by the proposals
    */
    randomPosition: () => randomInArray(bullshitFactory.data.positions),

    /**
     * Returns an object which contains all the job title's pieces and a method to trun it into a string
     * @returns {Bullshit} a bullshit job title which can be used for your LinkedIn page ;) 
     */
    generate: () => {

        return {
            adjective: bullshitFactory.randomAdjective(),
            sector: bullshitFactory.randomSector(),
            position: bullshitFactory.randomPosition(),

            /**
             * Glue the pieces of a job title to make a string 
             * @function glue
             * @returns {string} the final job title
             */
            glue: function () {
                return [this.adjective, this.sector, this.position].join(' ');
            }
        }
    },

    /**
     * Add propositions to those available in the property data 
     * @param {Bullshit} propositions - propositions to add
     */
    add: (propositions) => {
        for (let type in propositions) {
            if (bullshitFactory.data[pluralize(type)]) {
                bullshitFactory.data[pluralize(type)].push(propositions[type]);
            }
        }
    }

};

module.exports = bullshitFactory;