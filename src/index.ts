import 'dotenv/config'
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as http from 'http'
import * as path from "path";
import * as logger from "morgan";
import * as cors from "cors";
import * as process from "process";
import indexRouter from "./routes/index";


createConnection()
    .then(async connection => {

        // create express app
        const app = express();

        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, 'public')));

        // Enable CORS
        app.use(cors());

        // Enable the use of request body parsing middleware
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        /* register express routes */
        app.use('/', indexRouter);

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

        // // insert new users for test
        // await connection.manager.save(connection.manager.create(User, {
        //     firstName: "Timber",
        //     lastName: "Saw",
        //     age: 27
        // }));
        // await connection.manager.save(connection.manager.create(User, {
        //     firstName: "Phantom",
        //     lastName: "Assassin",
        //     age: 24
        // }));
    })
    .catch(error => console.log(error));
