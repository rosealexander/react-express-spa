import {AuthorController} from "../controller/author.controller";
import {Router} from "express";
import * as checkJwt from "../middleware/checkJwt";

const router = Router();

router.get("/all", checkJwt, AuthorController.all);
router.post("/generate", checkJwt, AuthorController.generate);

export default router;
