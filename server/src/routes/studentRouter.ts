import { Router } from "express";
import { addStudent, getAllStudents } from "../controllers/student.controller";

const studentRouter = Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", addStudent);
// studentRouter.delete("/:id", deleteTodo);

export default studentRouter;
