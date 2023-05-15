import { IStudentInfo } from "./student.interface";
import studentModel from "./student.model";

export const createDataForDb = async (payload: IStudentInfo): Promise<IStudentInfo> => {
  const studentData = new studentModel(payload)
 /* const studentData = new studentModel({
    id: "10",
    role: "student",
    name: {
      fName: "ikram akbar",
      mName: "Ikram ",
      lName: "akbar",
    },
    gender: "male",
    address: "Cumilla Chittagong Bangladesh",
    contactNum: "01800000",
    email: "test@ikram.akbar",
    dateOfBirth: "01 march 1990",
  });*/
  await studentData.save();
  // console.log(studentData);
  return studentData;
};

export const getStudentsDataFromDb = async () => {
  const data = await studentModel.find();
  return data;
};
