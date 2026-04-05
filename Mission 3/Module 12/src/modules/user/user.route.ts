import express from "express";
import auth from "../../middleware/auth";
import logger from "../../middleware/logger";
import { userController } from "./user.controller";

const router = express.Router();

// create user
router.post("/", userController.createUser);

// get all users
router.get("/", logger, auth("admin"), userController.getUser);

// get single user
router.get("/:id", auth("admin", "user"),  userController.getSingleUser);

// update user
router.put("/:id", userController.updateUser);

// delete user
router.delete("/:id", userController.deleteUser);

export const userRoutes = router;
