import { RequestHandler } from "express";

import interviewModel from "../models/interview.model";
import studentModel from "../models/student.model";

export const getAllInterviews: RequestHandler = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const interviews = await interviewModel
      .find({ interviewTopic: { $regex: search } })
      .skip(skip)
      .limit(limit);

    res
      .status(200)
      .json({ success: true, message: "Interviews fetched", interviews });
  } catch (error) {
    next(error);
  }
};

export const addInterview: RequestHandler = async (req, res, next) => {
  try {
    const { studentId, interviewTopic, dateOfInterview, companyName, result } =
      req.body;
    const createdBy = res.locals.user.id;
    const student = await studentModel.findOne({ studentId });
    if (!student)
      return res.status(404).json({
        success: false,
        message: "Student not found with provided Id",
      });
    const interview = await interviewModel.create({
      name: student.name,
      studentId,
      interviewTopic,
      dateOfInterview,
      companyName,
      result,
      createdBy,
    });
    res.status(201).json({ success: true, message: "Interview created" });
  } catch (error) {
    next(error);
  }
};

export const updateInterview: RequestHandler = async (req, res, next) => {
  try {
    const { result } = req.body;
    console.log("resutll", result);

    const interview = await interviewModel.findByIdAndUpdate(req.params.id, {
      result,
    });
    if (!interview)
      return res.status(404).json({
        success: false,
        message: "Interview not found with provided Id",
      });
    console.log("intervieww", interview);
    res.status(200).json({ success: true, message: "Interview updated" });
  } catch (error) {
    next(error);
  }
};
