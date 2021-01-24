const pluralize = require('pluralize');

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const randomInArray = list => {
    return list[random(0, list.length)];
};

const bullshitFactory = {
    data: require('../../data/bullshit_jt.json'),

    randomAdjective: () => randomInArray(bullshitFactory.data.adjectives),
    randomSector: () => randomInArray(bullshitFactory.data.sectors),
    randomPosition: () => randomInArray(bullshitFactory.data.positions),

    generate: () => {

        return {
            adjective: bullshitFactory.randomAdjective(),
            sector: bullshitFactory.randomSector(),
            position: bullshitFactory.randomPosition(),
            glue: function () {
                return [this.adjective, this.sector, this.position].join(' ');
            }
        }
    },

    add: (propositions) => {
        for (let type in propositions) {
            if (bullshitFactory.data[pluralize(type)]) {
                bullshitFactory.data[pluralize(type)].push(propositions[type]);
            }
        }
    }

};

module.exports = bullshitFactory;