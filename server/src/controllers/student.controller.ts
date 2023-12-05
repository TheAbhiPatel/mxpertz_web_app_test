import { RequestHandler } from "express";
import studentModel from "../models/student.model";

export const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const students = await studentModel
      .find({ name: { $regex: search } })
      .skip(skip)
      .limit(limit);
    const total = await studentModel
      .find({ name: { $regex: search } })
      .countDocuments();
    res
      .status(200)
      .json({ success: true, message: "Student fetched", students, total });
  } catch (error) {
    next(error);
  }
};

export const addStudent: RequestHandler = async (req, res, next) => {
  try {
    const {
      name,
      studentId,
      batch,
      college,
      reactFinalScore,
      webDFinalScore,
      dsaFinalScore,
      status,
    } = req.body;
    const createdBy = res.locals.user.id;
    const student = await studentModel.create({
      name,
      studentId,
      batch,
      college,
      reactFinalScore,
      webDFinalScore,
      dsaFinalScore,
      status,
      createdBy,
    });
    res.status(201).json({ success: true, message: "Student created" });
  } catch (error) {
    next(error);
  }
};

// export const deleteStudent: RequestHandler = async (req, res, next) => {
//   try {
//     const student = await studentModel.findByIdAndDelete(req.params.id);
//     res.status(200).json({ success: true, message: "Student deleted" });
//   } catch (error) {
//     next(error);
//   }
// };
