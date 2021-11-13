import {AuthorController} from "./controller/author.controller";
import {PoetryController} from "./controller/poetry.controller";
import * as checkJwt from "./middleware/checkJwt";
import * as checkAuthorization from "./middleware/checkAuthorization";

const routes = [
    {
        request: "get",
        path: "/author/all",
        middleware: [checkJwt],
        controller: AuthorController,
        method: 'all'
    },
    {
        request: "post",
        path: "/author/create",
        middleware: [checkJwt],
        controller: AuthorController,
        method: 'create'
    },
    {
        request: "get",
        path: "/poetry/all",
        middleware: [checkJwt],
        controller: PoetryController,
        method: 'all'
    },
    {
        request: "post",
        path: "/poetry/haiku",
        middleware: [checkJwt],
        controller: PoetryController,
        method: 'generateHaiku'
    },
    {
        request: "post",
        path: "/poetry/limerick",
        middleware: [checkJwt],
        controller: PoetryController,
        method: 'generateLimerick'
    },
    {
        request: "delete",
        path: "/poetry/clear",
        middleware: [checkJwt, checkAuthorization],
        controller: PoetryController,
        method: 'clear'
    }
]

export default routes;
