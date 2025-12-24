import express from "express";
import { userControllers } from "./user.controllers";
import logger from "../../middleware/logger";
import auth from "../auth";

const router = express.Router();

// routes -> controller -> service
router.post("/", userControllers.createUser);

router.get("/",logger,auth("admin"), userControllers.getUser);

router.get("/:id", userControllers.getSingleUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser)

export const userRoutes = router;
