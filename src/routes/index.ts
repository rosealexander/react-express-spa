import { Router, Request, Response } from "express";
import poem from "./poem";
import author from "./author";

const indexRouter = Router();

indexRouter.use("/poem", poem);
indexRouter.use("/author", author);

export default indexRouter;
