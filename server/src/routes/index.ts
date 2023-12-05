import { Router } from "express";
import authRouter from "./authRouter";
import studentRouter from "./studentRouter";
import requireUser from "../middlewares/requireUser";

const router = Router();

router.use("/auth", authRouter);
router.use("/students", requireUser, studentRouter);

export default router;
