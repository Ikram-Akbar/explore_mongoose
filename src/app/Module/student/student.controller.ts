import { NextFunction, Request, Response } from "express";
import {
  createDataForDb,
  getStudentInfoByIdFromDb,
  getStudentsDataFromDb,
} from "./student.service";

//POST request :
export const getStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const studentData = await createDataForDb(data);
  res.status(200).json({
    status: "success",
    data: studentData,
  });
  next();
};

//GET request :
export const getStudentsData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const studentsData = await getStudentsDataFromDb();
  res.status(200).json({
    status: "success",
    data: studentsData,
  });
  next();
};

//get specific student by filtering ID
export const getStudentFromDbById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const studentById = await getStudentInfoByIdFromDb(id);
  res.status(200).json({
    status: "success",
    data: studentById,
  });
  next();
};
