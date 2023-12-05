import { Router } from "express";
import authRouter from "./authRouter";
import studentRouter from "./studentRouter";
import requireUser from "../middlewares/requireUser";
import interviewRouter from "./interviewRouter";

const router = Router();

router.use("/auth", authRouter);
router.use("/students", requireUser, studentRouter);
router.use("/interviews", requireUser, interviewRouter);

export default router;
