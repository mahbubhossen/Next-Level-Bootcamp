import { Router } from "express";
import equipmentRouter from "../modules/equipment/equipment.route";
import logRouter from "../modules/usageLog/log.route";
import userRouter from "../modules/user/user.route";
import auth from "../middleware/auth";
import { Role } from "../generated/prisma/enums";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/equipment", equipmentRouter);
routes.use("/usageLog", auth([Role.Student]) ,logRouter);

export default routes;
