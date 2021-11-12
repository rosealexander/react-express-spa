import {PoetryController} from "../controller/poetry.controller";
import {Router} from "express";
import * as checkJwt from "../middleware/checkJwt";
import * as checkAuthorization from "../middleware/checkAuthorization";

const router = Router();

router.get("/all", checkJwt, PoetryController.all);
router.post("/haiku", checkJwt, PoetryController.generateHaiku);
router.post("/limerick", checkJwt, PoetryController.generateLimerick);
router.delete("/clear", checkJwt, checkAuthorization, PoetryController.clear);

export default router;
