import { Router } from "express";
import {
  addInterview,
  getAllInterviews,
  updateInterview,
} from "../controllers/interview.controller";

const interviewRouter = Router();

interviewRouter.get("/", getAllInterviews);
interviewRouter.post("/", addInterview);
interviewRouter.patch("/:id", updateInterview);

export default interviewRouter;
