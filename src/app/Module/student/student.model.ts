import { Schema, model } from "mongoose";
import { IStudentInfo } from "./student.interface";
const studentSchema = new Schema<IStudentInfo>({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    name: {
        fName: {
            type: String,
            required: true,
        },
        mName: {
            type: String,
            required: true,
        },
        lName: {
            type: String,
            required: true,
        },
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    address: {
        type: String,
        required: true,
    },
    contactNum: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
});

//creating model :

const studentModel = model<IStudentInfo>("students", studentSchema);

export default studentModel;