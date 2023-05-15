import { NextFunction, Request, Response } from "express";
import { createDataForDb } from "./student.service";


const getStudentController = async (req: Request, res: Response, next: NextFunction) => {
    
    const callDB = await createDataForDb();
    next();
}