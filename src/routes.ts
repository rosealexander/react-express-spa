import { Router } from "express";
import {AuthorController} from "./controller/author.controller";
import {PoetryController} from "./controller/poetry.controller";
import * as checkJwt from "./middleware/checkJwt";
import * as checkAuthorization from "./middleware/checkAuthorization";

const router = Router();

// router.get("/author/all", checkJwt, AuthorController.all);
// router.post("/author/create", checkJwt, AuthorController.create);
// router.get("/poetry/all", checkJwt, PoetryController.all);
// router.post("/poetry/haiku", checkJwt, PoetryController.generateHaiku);
// router.post("/poetry/limerick", checkJwt, PoetryController.generateLimerick);
// router.delete("/poetry/clear", checkJwt, checkAuthorization, PoetryController.clear);

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

for (const route of routes){
    router[route.request](route.path, route.middleware, route.controller[route.method])
}


export default router;
