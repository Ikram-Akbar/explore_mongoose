import express from "express";
import { getStudentController, getStudentsData } from "./student.controller";


const router = express.Router();


router.get("/allStudents", getStudentsData);
router.post("/create-user", getStudentController);

export default router;