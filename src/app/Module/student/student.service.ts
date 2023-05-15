import { IStudentInfo } from "./student.interface";
import studentModel from "./student.model";

export const createDataForDb = async (
  payload: IStudentInfo
): Promise<IStudentInfo> => {
  const studentData = new studentModel(payload);
  await studentData.save();
  return studentData;
};

/**
 *
 * This is service
 * get all the data from the DB
 * Return Promise< IStudent[]>
 */

export const getStudentsDataFromDb = async (): Promise<IStudentInfo[]> => {
  const data = await studentModel.find();
  return data;
};

export const getStudentInfoByIdFromDb = async (
  payload: string
): Promise<IStudentInfo | null> => {
  const data = await studentModel.findOne({ id: payload });
  return data;
};
