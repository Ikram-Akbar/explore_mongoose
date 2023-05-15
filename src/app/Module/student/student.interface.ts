export interface IStudentInfo {
    id: string;
    role: "student";
    name: {
        fName: string;
        mName: string;
        lName: string;
    };
    gender: "male " | "female";
    address: string;
    contactNum: string;
    email?: string;
    dateOfBirth: string;
}