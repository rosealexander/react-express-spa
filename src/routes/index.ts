import { Router, Request, Response } from "express";
import poetry from "./poem";
import author from "./author";

const indexRouter = Router();

indexRouter.use("/poetry", poetry);
indexRouter.use("/author", author);

export default indexRouter;
