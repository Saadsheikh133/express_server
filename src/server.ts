import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import config from "./config";

const app = express();
const port = 5000;

//parser
app.use(express.json());

initDB();


app.get("/",logger, (req: Request, res: Response) => {
  res.send("Hello, Next Level Developers!");
});

// Users CRUD Operation
app.use("/users",userRoutes);


// todos CRUD operation
app.use("/todos", todoRoutes);

// auth routes
app.use("/auth", authRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
