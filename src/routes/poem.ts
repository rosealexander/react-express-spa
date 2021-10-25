import {PoemController} from "../controller/poem.controller";
import {Router} from "express";
import * as checkJwt from "../middleware/checkJwt";

const router = Router();

//Get all users
router.get("/all", checkJwt, PoemController.all);

export default router;
