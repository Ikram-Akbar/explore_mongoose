import express from "express";
import { getStudentController, getStudentFromDbById, getStudentsData } from "./student.controller";



const router = express.Router();


router.get("/allStudents", getStudentsData);
router.get("/:id", getStudentFromDbById )
router.post("/create-user", getStudentController);

export default router;