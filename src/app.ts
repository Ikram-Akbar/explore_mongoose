import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";


const app: Application = express();
app.use(cors());

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//route : 
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    // res.send("Hello World!");
    // next();
    /*
        1. define an Interface
        2. define schema and use it generic with Interface
        3. define Model
    */
    
    interface IStudentInfo{
        id: string;
        role: "student";
        name: {
            fName: string;
            mName: string;
            lName: string;
        };
        gender: "male " | "female",
        address: string;
        contactNum: string;
        email?: string;
        dateOfBirth: string;
    };

    const studentSchema = new Schema<IStudentInfo>({
        id: {
            type: String,
            required: true,
            unique:true,
        },
        role: {
            type: String,
            required:true,
        },
        name: {
            fName: {
                type: String,
                required: true
            },
            mName: {
                type: String,
                required:true
            },
            lName: {
                type: String,
                required:true
            }
        },
        gender: {
            type: String,
            required: true,
            enum:["male", "female"]
        },
        address: {
            type: String,
            required: true,
        },
        contactNum: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        dateOfBirth: {
            type: String,
            required:true
        }

    })
});

export default app;
