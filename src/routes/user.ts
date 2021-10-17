import {UserController} from "../controller/UserController";
import {Router} from "express";
import * as checkJwt from "../middleware/checkJwt";

const router = Router();

//Get all users
router.get("/", checkJwt, UserController.all);

export default router;
