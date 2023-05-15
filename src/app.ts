import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/Module/student/student.route";


const app: Application = express();
app.use(cors());

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route :
app.use("/api/v1/students", router)

export default app;
