import 'reflect-metadata';
import 'dotenv/config'
import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from 'http'
import * as path from "path";
import * as logger from "morgan";
import * as cors from "cors";
import * as process from "process";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerJSDoc from 'swagger-jsdoc';
import indexRouter from "./routes/index";

import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';

useContainer(Container);

/** Create a connection and start using TypeORM. */
createConnection()
    .then(async connection => {

        /* create express app */
        const app = express();

        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, 'public')));

        /* Enable CORS */
        app.use(cors());

        /* Enable the use of request body parsing middleware */
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        /* register express routes */
        app.use('/', indexRouter);

        /* setup Swagger */
        const options = {
            swaggerDefinition: {
                info: {
                    title: 'REST API',
                    version: '1.0.0',
                    description: 'Example docs',
                },
            },
            apis: ['swagger.yaml'],
        };

        const specs = swaggerJSDoc(options);
        app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

        /* Get Express app to serve React app */
        app.use(express.static(path.join(__dirname, "view", "build")))
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "view", "build", "index.html"));
        });

        /* Get port from environment and store in Express. */
        const port = process.env.PORT || '3001';
        app.set('port', port);

        /* Create HTTP server. */
        const server = http.createServer(app);

        /* Listen on provided port, on all network interfaces. */
        server.listen(port);
        const addr = server.address();
        const bind = typeof addr === 'string' ? 'PIPE:' + addr : 'PORT:' + addr.port;
        console.log(`🚀🌛 Listening on ${bind} `);

    })
    .catch(error => {
            console.error(`Couldn't connect to the database!`);
            console.error(error);
    });
