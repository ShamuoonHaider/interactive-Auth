import { Router } from "express";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/userController";

export const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/register", registerUser);
userRouter.get("/user", getUser);
