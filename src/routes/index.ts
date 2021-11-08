import { Router, Request, Response } from "express";
import poetry from "./poetry";
import author from "./author";

const indexRouter = Router();

indexRouter.use("/poetry", poetry);
indexRouter.use("/author", author);

export default indexRouter;
