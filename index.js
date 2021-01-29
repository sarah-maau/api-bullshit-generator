require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a server which generates a bullshit job title',
            title: 'Bullshit Job Title',
            version: '1.0.0',
        },
        host: 'localhost:3030',
        basePath: '/api',
        produces: [
            "application/json"
        ],
        schemes: ['http'],
    },
    basedir: __dirname,
    files: ['./app/router.js', './app/services/bullshitFactory.js']
};
expressSwagger(options)

const router = require('./app/router');

app.use(express.json());
app.use('/api', router);

app.listen(port, ()=> console.log(`Listening on ${port}`))
