import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";


const app: Application = express();
app.use(cors());

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route :
app.get("/", (req: Request, res: Response, next: NextFunction) => {

  res.send("hello");
});

export default app;
