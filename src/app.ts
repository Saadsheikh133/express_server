import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { todoRoutes } from "./modules/todo/todo.routes";

const app = express();

//parser
app.use(express.json());

initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello, Next Level Developers!");
});

// Users CRUD Operation
app.use("/users", userRoutes);

// todos CRUD operation
app.use("/todos", todoRoutes);

// auth routes
app.use("/auth", authRoutes);

export default app;
