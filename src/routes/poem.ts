import {PoetryController} from "../controller/poetry.controller";
import {Router} from "express";
import * as checkJwt from "../middleware/checkJwt";

const router = Router();

//Get all poems
router.get("/all", checkJwt, PoetryController.all);
//Create a new random poem
router.post("/generate", checkJwt, PoetryController.generate);
//Remove all Haiku and Limerick
router.delete("/clear", checkJwt, PoetryController.clear);

export default router;
