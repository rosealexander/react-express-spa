import { Router, Request, Response } from "express";
import user from "./user";

const indexRouter = Router();

indexRouter.use("/user", user);

export default indexRouter;
