import { Router, Request, Response } from "express";
import poem from "./poem";

const indexRouter = Router();

indexRouter.use("/poem", poem);

export default indexRouter;
