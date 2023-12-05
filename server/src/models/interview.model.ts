import mongoose, { Document } from "mongoose";

interface IBaseInteview {
  name: string;
  studentId: string;
  interviewTopic: string;
  dateOfInterview: string;
  companyName: string;
  result: string;
}

interface IInterviewSchema extends IBaseInteview, Document {}

const interviewSchema = new mongoose.Schema<IInterviewSchema>({
  name: { type: String, required: true },
  studentId: { type: String, required: true },
  interviewTopic: { type: String, required: true },
  dateOfInterview: { type: String, required: true },
  companyName: { type: String, required: true },
  result: {
    type: String,
    enum: ["PASS", "FAIL", "ON HOLD", " Didn’t Attempt", "In Progress"],
    default: "In Progress",
  },
});

const interviewModel = mongoose.model<IInterviewSchema>(
  "interview",
  interviewSchema
);

export default interviewModel;
