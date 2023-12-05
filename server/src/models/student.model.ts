import mongoose, { Document } from "mongoose";

interface IBaseStudent {
  name: string;
  studentId: string;
  batch: string;
  college: string;
  reactFinalScore: number;
  webDFinalScore: number;
  dsaFinalScore: number;
  status: string;
  createdBy: string;
}

interface IStudentSchema extends IBaseStudent, Document {}

const studentSchema = new mongoose.Schema<IStudentSchema>({
  name: { type: String, required: true },
  studentId: { type: String, required: true },
  batch: { type: String, required: true },
  college: { type: String, required: true },
  reactFinalScore: { type: Number, required: true },
  webDFinalScore: { type: Number, required: true },
  dsaFinalScore: { type: Number, required: true },
  status: { type: String, enum: ["placed", "not_placed"], required: true },
  createdBy: { type: String, required: true },
});

const studentModel = mongoose.model<IStudentSchema>("student", studentSchema);

export default studentModel;
