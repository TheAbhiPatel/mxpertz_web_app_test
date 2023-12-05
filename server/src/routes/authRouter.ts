import { Router } from "express";
import { loginUser, signupUser } from "../controllers/user.controller";

const authRouter = Router();

authRouter.post("/signup", signupUser);
authRouter.post("/login", loginUser);

export default authRouter;
