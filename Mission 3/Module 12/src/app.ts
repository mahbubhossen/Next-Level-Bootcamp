import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { authRoutes } from "./modules/auth/auth.route";
import { todoRoutes } from "./modules/todo/todo.route";
import { userRoutes } from "./modules/user/user.route";

const app = express();

//parser
app.use(express.json());

// initialize database
initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello next level developers !");
});

// users CRUD
app.use("/users", userRoutes);

// todos crud
app.use("/todos", todoRoutes);

// auth routes
app.use("/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

export default app;
