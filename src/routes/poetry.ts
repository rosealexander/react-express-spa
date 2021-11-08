import {PoetryController} from "../controller/poetry.controller";
import {Router} from "express";
import * as checkJwt from "../middleware/checkJwt";

const router = Router();

//Get all poetry
router.get("/all", checkJwt, PoetryController.all);
router.post("/generate", checkJwt, PoetryController.generate);
router.delete("/clear", checkJwt, PoetryController.clear);

export default router;
