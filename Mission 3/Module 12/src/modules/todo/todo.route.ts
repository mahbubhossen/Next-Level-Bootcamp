import express from "express";
import { todoController } from "./todo.controller";
const router = express.Router();

// create todo
router.post("/", todoController.createTodo);

// get todo
router.get("/", todoController.getTodo);

// get single todo
router.get("/:id", todoController.getSingleTodo);

// update todo
router.put("/:id", todoController.updateTodo);

// delete todo
router.delete("/:id", todoController.deleteTodo);

export const todoRoutes = router;
