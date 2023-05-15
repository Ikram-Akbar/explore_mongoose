import studentModel from "./student.model";

export const createDataForDb = async () => {
  const studentData = new studentModel({
    id: "0001",
    role: "student",
    name: {
      fName: "ikram",
      mName: "Ibn",
      lName: "akbar",
    },
    gender: "male",
    address: "Cumilla Chittagong Bangladesh",
    contactNum: "01850495348",
    email: "test@ikram.akbar",
    dateOfBirth: "01 march 1990",
  });
  await studentData.save();
  console.log(studentData);
};
